import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const Content = () => mdx`
# Getting Started
---

Começar a usar IARES para construir aplicações web, mobile ou desktop pode ser uma decisão inteligente se seu objetivo é desenvolver software com simplicidade e eficiência.

IARES é open source e foi projetado para ajudar a construir e entregar sistemas rapidamente. Portanto, ao contrário da maioria dos frameworks, IARES não se tornará o próximo impecilho na sua pilha de tecnologias.

A documentação de IARES é pequena de propósito. Mas, também é clara e eficiente e cobre tudo o que é necessário saber sobre a ferramenta.


## Installation

IARES combina simplicidade e eficiência com ferramentas como Bun, Capacitor e Tauri ao fornecer templates poderosos, prontos para desenvolver para mobile (IOS e Android), Desktop (Windows, Mac OS e Linux) e web (SPA, SSR e SSG).


### Aplicativos


Abaixo, você encontra instruções para instalar cada um dos templates para desenvolvimento web, mobile ou desktop. Escolha o melhor template para o seu projeto.

- Mobile ( IOS )

~~~raw
npx degit to-codando/iares-template-spa
~~~

- Mobile ( Android )

~~~raw
npx degit to-codando/iares-template-spa
~~~

- Desktop ( Windows, Mac OS, Linux )

~~~raw
npx degit to-codando/iares-template-spa
~~~



## Configuration

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus architecto explicabo repudiandae hic laborum possimus dolore necessitatibus sit facere.

## Usage

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus architecto explicabo repudiandae hic laborum possimus dolore necessitatibus sit facere.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, voluptate?


~~~js
import { MenuApp, TemplatePage, type HTMType } from "@/components/ui";

const template = (props: HTMType) => html\`
  <${MenuApp} />
\`
~~~

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, voluptate?

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${Content}
    rightSidebar=${MenuApp}
  />
`;

export const GetStartedPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  get-started-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }
`;
