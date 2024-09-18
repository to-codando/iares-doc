import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Components
---

Componentes IARES são funções que devem retornar templates html, jsx, tsx ou mdx e estilos css.

Veja abaixo um exemplo de componente simples.

~~~js
import { tsx } from 'iares';

const template = () => tsx\`
  <button>
    Say hello!
  </button>
\`

export const ButtonApp = () => ({ 
  template, 
  styles 
})

const styles = () => css\`
  button-app {
    display:flex;
  }
\`
~~~

Observe que as funções template e styles são injetadas no componente através da técnica de composição de objetos.

## Template

Um template em componentes IARES é apenas uma função que pode retornar html, jsx, tsx ou inda mdx.

> *jsx, tsx e mdx* são notações capazes de combinar a sintaxe javascript ou typescript com elementos html e marcações markdown respectivamente.

### Parâmetros do template

O template tem a capacidade de acessar os parâmetros abaixo:

- **props** - Propriedades de dados fornecidas através de atributos do componente.
- **state** - Objeto contendo chaves de dados do gerenciador de estados ligado ao componente.
- **actions** - Funções capazes de executar operações e definir o comportamento de reação do componente.

Veja abaixo um exemplo de como declarar e acessar parâmetros de template.

~~~js
import { tsx, createState } from 'iares';
import { debounce } from '@/utils';

type TProps = {
  value: number;
}

Type TState = {
  total: number;
}

TActions = {
  doubleValue: () => void;
}

type TParams = {
  props: TProps;
  state: TState;
  actions: TActions;
}

const template = ({ state, props, actions }: TParams) => tsx\`
  <label>
    <span> O dobro de:</span>
    <input type="text" onkeyup=\${debounce(actions.doubleValue)}/> é \${total}
  </label>
\`

export const DoubleValueApp = ({ props }: TProps) => {
  const state = createState<TState>({ total: props.value || 0 })

  const actions = {
    doubleValue: (value: number) => {
      const total = value * 2;
      state.setState({ total })
    }
  }

  return { template, state, props, actions }
}

~~~

Observe que os recursos retornados em **DoubleValueApp** são acessados através da função de template na view do componente.

> IARES é inteligente o suficiente para fornecer à propriedade composta **template** as outras três propriedades **state**, **props** e **actions** e assim garante total flexibilidade para gerenciar como o componente reage a mudanças de estado e que informações devem ser exibidas.

## Composition API

Nas seções anteriores o componente ButtonApp foi composto pelas funções template e styles. No entanto, existem outras propriedades que podem fazer parte da composição de componentes IARES.

Observe abaixo todas as propriedades que podem fazer parte de componentes IARES:

- **template** - Função que retorna um literal template contendo elementos html e outros componentes.
- **styles** - Função que retorna um literal template contendo os estilos css do componente.
- **props** - Propriedades de dados fornecidas por outros componentes através de atributos html.
- **state** - Dados observáveis através dos quais o componente pode reagir a alterações de estado.
- **actions** - Funções capazes de executar operações e defir reações programaticamente.
- **hooks** - Funções específicas executadas no ciclo de vida de componentes IARES.

Para saber mais sobre **state** e **hooks** acesse suas respectivas seções através dos links:
- [State](#/state)
- [Lifecycle hooks](#/lifecycles)

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "lifecycles", next: "state" }}
  />
`;

export const ComponentsPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  components-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  components-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
