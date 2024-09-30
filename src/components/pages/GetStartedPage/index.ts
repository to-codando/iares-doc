import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Getting Started
---
IARES is an open-source project created to help build all types of commercial applications with web technologies. However, unlike many frameworks and libraries, IARES doesn't become the next problem in your tech stack.

The IARES documentation is intentionally brief but clear and understandable. Therefore, in this documentation, you can learn everything about developing with IARES.

## Installation

You may want to develop applications for web, mobile, or desktop. Hence, I have prepared an appropriate template for each project type.

### Template types

Each template works with a specific set of tools to meet the necessities of each project type.

- **esbuild**: Web development (SPA).
- **Bun**: Web development (SSR or SSG).
- **Capacitor**: Mobile development (iOS and Android).
- **Tauri**: Desktop development (Windows, Mac OS, or Linux).

Just copy and paste any of the following terminal commands into your terminal, and you will get a project bootstrap to start application development.

#### Web (SPA)

~~~raw
npx degit to-codando/iares-template-spa new-spa-app-name
~~~

#### Web (SSR)

~~~raw
npx degit to-codando/iares-template-ssr new-ssr-app-name
~~~

#### Web (SSG)

~~~raw
npx degit to-codando/iares-template-ssg new-ssg-app-name
~~~

#### Mobile (Android and iOS)

~~~raw
npx degit to-codando/iares-template-mobile new-mobile-app-name
~~~

#### Desktop (Windows, Mac OS, Linux)

~~~raw
npx degit to-codando/iares-template-desktop new-desktop-app-name
~~~

## Launch the application

To run the project, you first need to install all application dependencies. Therefore, use the following command:

~~~raw
pnpm i
~~~

The IARES templates are already prepared to serve the application locally using HTTPS through your computer's IP address. However, you can change this behavior by adjusting the information in the **.env** file, which you must create manually at the root of your project with instructions similar to those below:

~~~raw
# BUILD MODE
# VALUES: production or development
NODE_ENV=development

PROTOCOL=https

# NETWORK PORT
PORT=3000

# USE IN PRODUCTION BUILD
PROD_HOST=localhost

# USE IN DEVELOPMENT
# THIS IS THE IP ADDRESS OF THE DEVELOPMENT MACHINE
DEV_HOST=192.168.18.22

# HTTPS IN DEV MODE
TLS_KEY=server.key
TLS_CERT=server.crt
~~~

You also need to create the required TLS certificate files to serve the application through a self-signed secure certificate.

If you want to remove the HTTPS configuration and serve the application on localhost using only HTTP protocol, simply set the **PROTOCOL** variable in the **.env** file to **http** and remove the following configuration from the **esbuild.config.js** file:

~~~js
keyfile: KEYPEM,
certfile: CERTPEM,
~~~

With all dependencies installed, you can run the application using the following command:

~~~raw
pnpm dev
~~~

If you followed all the steps correctly, the application will be available in your browser at the address: **https://your.ip:3000**

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "", next: "scaffolding" }}
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
