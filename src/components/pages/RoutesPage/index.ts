import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Routes
---
IARES is an open-source project created to help build all types of commercial applications with web technologies. However, unlike many frameworks and libraries, IARES doesn't turn into the next problem in your tech stack.

The IARES documentation is intentionally brief but clear and understandable. Therefore, in this documentation, you can learn all about developing with IARES.

## Installation

Maybe you want to develop applications for web, mobile, or desktop. Hence, I prepared an appropriate template for each project type.

### Template types

Each template works with a specific set of tools to meet the necessities of each project type.

- **esbuild**: Web development (SPA).

- **Bun**: Web development (SSR or SSG).

- **Capacitor**: Mobile development (IOS e Android).

- **Tauri**: Desktop development (Windows, Mac OS or Linux).


Just copy and paste any of the following terminal commands into your terminal, and you will get a project bootstrap to start application development.

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

To execute the project, you first need to install all application dependencies. Therefore, use the following command:

~~~raw
pnpm i
~~~

With all dependencies installed, you can run the application using the following command:

~~~raw
pnpm dev
~~~

If you performed all the steps correctly, the application will be available in your browser through the address: **https://your.ip:3000**
`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
  />
`;

export const RoutesPage = () => {
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
