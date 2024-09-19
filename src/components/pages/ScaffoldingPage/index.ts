import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { FamImage } from "fam-code-ui";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Scaffolding
---

See the image below to view the default folder and file structure of an IARES project:

![Scaffolding](/assets/images/scaffolding.png)

## Folder Descriptions

Below is the description of each folder in the standard IARES project scaffolding.

- **[api] Folder**

This folder is where the API mocking configuration is done using *[json-server](https://www.npmjs.com/package/json-server)*.

~~~raw
./api
- db.json
- index.js
~~~

While the mocking server is configured via the *api/index.json* file, the *api/db.json* file defines the mocking data for each API endpoint.

- **[config] Folder**

In the config folder, you'll find configurations and utilities for local plugins used in application builds.

~~~raw
./config
|-utils.js
|-/plugins
  |--onRebuild
  |--tsAliasPathResolver
  |--env
~~~

- *config/utils.js* - This file defines utility functions used in local plugins.
- *config/plugins* - Contains each of the local plugins developed to meet specific build requirements for IARES applications.
  - *plugins/onRebuild* - Displays the application host and the current build hash every time esbuild executes a new build.
  - *plugins/tsAliasPathResolver* - Resolves path aliases and generates type definitions each time a build is executed.

- **[public] Folder**

In the *./public* folder, you'll find all public files for an application built with IARES.

~~~raw
./public
  -assets/
    |-images/
    |-styles/
      |-reset.css
      |-global.css
      |-grid.css
      |-main.css
      |-var.css
  -index.html
~~~

With the exception of the index.html file, none of the above files are mandatory. However, this structure can contribute to greater productivity during application development.

The CSS files defined in *public/styles* are loaded via the *index.html* file.

~~~html
<header>
  <link rel="stylesheet" href="./assets/styles/main.css" />
<header>
~~~

The CSS file imports are concentrated in the *main.css* file.

~~~css
@import url('./var.css');
@import url('./reset.css');
@import url('./grid.css');
@import url('./global.css');
@import url('./code.css');
~~~

- **[src] Folder**

Following convention, all application resources are located and should be defined in the *./src* folder.

~~~raw
./src
  |-components/
  |-routes/
  |-services/
  |-tests/
  |-utils/
  |-main.ts
~~~

- **[ssh] Folder**

This folder usually contains files that store SSH keys and are used by the build system to create the local server using *https*.

~~~raw
./ssh
  |-server.crt
  |-server.key
~~~

These files can be easily referenced via environment variables to later configure a development server.

~~~raw
# .env
TLS_KEY=server.key
TLS_CERT=server.crt
~~~

You can see an example below of how this configuration can be done with ![esbuild](https://esbuild.github.io).

~~~js
//esbuild.config.js
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { context, build } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TLS_KEY = process.env.TLS_KEY;
const TLS_CERT = process.env.TLS_CERT;
const SSHPATH = join(__dirname, "./ssh");
const KEYPEM = join(\`\${SSHPATH}/\${TLS_KEY}\`);
const CERTPEM = join(\`\${SSHPATH}/\${TLS_CERT}\`);

const ctx = await context(config);

ctx.serve({
  port: PORT,
  host: HOST,
  servedir: "./dist",
  keyfile: KEYPEM,
  certfile: CERTPEM,
});
~~~

- **Other files:**

1. **esbuild.config.json** - Configures the application build with [esbuild](https://esbuild.github.io).
2. **tsconfig.json** - Configures the behavior of the [TypeScript](https://www.typescriptlang.org) language.
3. **biome.json** - Defines linting and code formatting behavior with [biome](https://biomejs.dev).
4. **.prettierrc** - Defines code formatting behavior with [prettier](https://prettier.io).
5. **.stylintrc** - Defines CSS code linting behavior with [stylelint](https://stylelint.io).
6. **.mocharc** - Configuration for automated testing with [mocha](https://mochajs.org).
7. **.env** - Contains environment variable definitions.
8. **package.json** - Contains project dependency definitions.
9. **.editorconfig** - Compatible with most code editors, [editorConfig](https://editorconfig.org) defines basic code editing formatting.
10. **.npmrc** - Defines the behavior of dependency managers like [npm](https://www.npmjs.com) or [pnpm](https://pnpm.io), which is the default manager used in IARES projects.

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "getting-started", next: "lifecycles" }}
  />
  `;

export const ScaffoldingPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  scaffolding-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

scaffolding-page content-app {
  display: block;
  float: left;
  width: 100%;
}
`;
