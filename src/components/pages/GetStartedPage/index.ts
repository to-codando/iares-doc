import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Getting Started
---

IARES é open source e foi projetado para ajudar a construir e entregar sistemas rapidamente e ao contrário da maioria dos frameworks, não se tornará o próximo impecilho na sua pilha de tecnologias.

A documentação de IARES é pequena, clara e eficiente cobrindo tudo o que é necessário saber sobre a ferramenta.

## Installation

Você pode querer desenvolver aplicativos para web, mobile ou desktop. Por isso, preparei um template para cada tipo de projeto.

### Templates

Cada template trata dedicadamente as necessidades arquiteturais básicas, de cada tipo de sistema e define a estrutura inicial do projeto e suas dependências genéricas.


- **esbuild** - Desenvolvimento web com renderização SPA.

- **Bun** - Desenvolvimento web com renderização SSR ou SSG.

- **Capacitor** - Desenvolvimento mobile (IOS e Android).

- **Tauri** - Desenvolvimento desktop (Windows, Mac OS e Linux).


Apenas copie uma das instruções abaixo e cole no terminal do seu sistema operacional para criar um novo projeto com IARES.

#### Web ( SPA )

~~~raw
npx degit to-codando/iares-template-spa new-spa-app-name
~~~

#### Web ( SSR )

~~~raw
npx degit to-codando/iares-template-ssr new-ssr-app-name
~~~


#### Web ( SSG )

~~~raw
npx degit to-codando/iares-template-ssg new-ssg-app-name
~~~

#### Mobile ( Android e IOS )

~~~raw
npx degit to-codando/iares-template-mobile new-mobile-app-name
~~~

#### Desktop ( Windows, Mac OS, Linux )

~~~raw
npx degit to-codando/iares-template-desktop new-desktop-app-name
~~~

## Launch the application

Para inicializar a aplicação, primeiro é necessário instalar todas as dependências. Faça isso, executando o comando abaixo no terminal, após acessar o diretório do projeto.

~~~raw
pnpm i
~~~

Com todas as dependências instaladas, você pode executar a aplicação através do comando:


~~~raw
pnpm dev
~~~

Se você executou os comandos corretamente, sua aplicação já está acessível no navegador através do endereço: *https://seu.ip:3000*

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
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

  get-started-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
