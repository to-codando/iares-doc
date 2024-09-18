import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Lifecycle hooks
---

Veja como é simples e compreensível a linha do tempo do ciclo de vida dos componentes IARES.

![components lifecycle](/assets/images/lifecycle.png)

## Tipos e cronologia

Cada um dos hooks do ciclo de vida é chamado no momento adequado. A ordem de execução dos hooks quando declarados é:

1. **beforeMount** - Executado antes de montar o componente.
2. **beforeRender** - Executado antes da renderização do html do componente.
3. **afterRender** - Executado após a renderização do html do componente.
4. **afterMount** - Executado após concluir a montagem do componente.
5. **destroy** - Executado logo antes de destruir o componente.

## Declarando hooks

No IARES os hooks são apenas funções. Mas, para fins de organização e modularidade, você pode criar hooks usando factories.

Abaixo exemplos de hooks IARES podem ser declarados.

- **Declaração simples:**

A declaração simples pode ser usada em casos muitos simples em que dado hook executará apenas uma única ação que por sua vez afetará o comportamento do componente.

~~~js
//HelloApp/index.ts
import { tsx } from 'iares';

const template = () => tsx\`
<h1>Hello!</h1>
\`
export const HelloApp = () => {

  const hooks = {
    beforeMount() {
      console.log('Hello!')
    }
  }

  return { template, hooks }
}
~~~

- **Declaração com factory:**

A declaração através de factory function pode ser usada quando um certo conjunto de hooks é necessário para definir comportamentos através da execução de diferentes ações do componente.

~~~js
//HelloApp/hooks/index.ts
type THelloAppActions = {
  showLocationHash: () => void;
}

export const HelloAppCreateHooks = (actions: THelloAppActions) => {
  const afterMount = () => {
    window.addEventListener('hashchange', showLocationHash
 }
  const destroy = () => {
    window.removeEventListener('hashchange', showLocationHash)
  }
  return { beforeMount, destroy }
}
~~~

No exemplo acima, dois hooks foram declarados **afterMount** e **destroy**.

A função afterMount, será executada após a montagem do component e um event listener será adicionado. Através do event listener mensagens de log serão exibidas no console do navegador quando o location hash for alterado.

A função destroy será executada logo antes do componente ser destruído e removerá o listener do evento **hashchange**.

### Usando hooks factory

No exemplo anterior um factory foi declarado para criar os hooks **beforeMount** e **destroy**. Seguindo adiante, é possível importar esse factory e usá-lo para definir o comportamento do componente.

~~~js
//HelloApp/index.ts
import { tsx } from 'iares';
import { HelloAppCreateHooks } from './hooks'

const template = () => tsx\`
<h1>Hello!</h1>
\`
export const HelloApp = () => {

  const actions = {
    showLocationHash() {
      console.log(window.location.hash)
    }
  }

  const hooks = createHooks(actions)

  return { template, hooks }
}
~~~

Você pode adicionar qualquer um dos 5 hooks suportados nos componentes IARES e ao adotar essa estratégia que favorece a modularização e facilita a aplicação de testes de unidade.
`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "scaffolding", next: "components" }}
  />
`;

export const LifecyclesPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  lifecycles-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  lifecycles-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
