import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { FamImage } from "fam-code-ui";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Scaffolding
---


Veja na imagem abaixo como se parece a estrutura padrão de pastas e arquivos de um projeto IARES:

![Scaffolding](/assets/images/scaffolding.png)

## Descrição de pastas 

A seguir a descrição de cada pasta no scaffolding padrão de projetos IARES.

- **Pasta [api]**

É nessa pasta que a configuração de API mocking é realizada através de *[json-server](https://www.npmjs.com/package/json-server)*.

~~~raw
./api
- db.json
- index.js
~~~

Enquanto o servidor de mocking é configurado através do arquivo *api/index.json*, o arquivo *api/db.json* define os dados de mocking de cada endpoint da API.

- **Pasta [config]**

Na pasta config, estão configurações e utilitários de plugins locais usados no build das aplicações.

~~~raw
./config
|-utils.js
|-/plugins
  |--onRebuild
  |--tsAliasPathResolver
  |--env
~~~

- *config/utils.js* - Nesse arquivo estão definidas funções utilitárias utilizadas nos plugins locais.
- *config/plugins* - Contém cada um dos plugins locais desenvolvidos para atender a requisitos específicos do build de aplicações IARES.
  - *plugins/onRebuild* - Exibe o host da aplicação e o hash do build atual, toda vez que esbuild executa uma nova construção.
  - *plugins/tsAliasPathResolver* - Resolve path aliases e gera definição de tipos, toda vez que uma construção é executada.

- **Pasta [public]**

Na pasta *./public*, estão presentes todos os arquivos públicos de uma aplicação construída com IARES.

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

Com exceção do arquivo index.html, nenhum dos arquivos acima é obrigatório. Mas, essa estrutura pode contribuir para maior produtividade durante o desenvolvimento de uma aplicação.

Os arquivos css definidos em *public/styles* são carregados através do arquivo *index.html*.

~~~html
<header>
  <link rel="stylesheet" href="./assets/styles/main.css" />
<header>
~~~

As importações dos arquivos css são concentradas no arquivo *main.css*.

~~~css
@import url('./var.css');
@import url('./reset.css');
@import url('./grid.css');
@import url('./global.css');
@import url('./code.css');
~~~

- **Pasta [src]**

Seguindo a convenção, é na pasta *./src* que estão e devem ser definidos todos os recursos de uma aplicação.

~~~raw
./src
  |-components/
  |-routes/
  |-services/
  |-tests/
  |-utils/
  |-main.ts
~~~

- **Pasta [ssh]**

Nessa pasta costumam estar presentes arquivos que armazenam chaves ssh e que são usados pelo sistema de build para criar o servidor local usando *https*.

~~~raw
./ssh
  |-server.crt
  |-server.key
~~~

Através de variáveis de ambiente é fácil referneciar esses arquivos para mais tarde configurar um servidor de desenvolvimento.

~~~raw
# .env 
TLS_KEY=server.key
TLS_CERT=server.crt
~~~


Você pode ver abaixo um exemplo de como essa configuração é pode ser feita com ![esbuild](https://esbuild.github.io).

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

- **Outros arquivos:**

1. **esbuild.config.json** - Cofigura a contrução da aplicação com [esbuild](https://esbuild.github.io).
2. **tsconfig.json** - Configura o comportamento da linguagem [typescript](https://www.typescriptlang.org).
3. **biome.json** - define o comportamento de lint e formatação de código com [biome](https://biomejs.dev).
4. **.prettierrc** - Define o comportamento de formatação de código com [prettier](https://prettier.io).
5. **.stylintrc** - Define o comportamento de lint de código css com [stylint](https://stylelint.io).
6. **.mocharc** - Configuração de tests automatizados com [mocha](https://mochajs.org).
7. **.env** - Contém definições de variáveis de ambiente.
8. **package.json** - Contém definições de dependêcias do projeto.
9. **.editorconfig** - Compatível com a maioria dos editores de código, [editorConfig](https://editorconfig.org) define formatações básicas para edição de código.
10. **.npmrc** - Define o comportamento de gerenciadores de dependências como [npm](https://www.npmjs.com) ou [pnpm](https://pnpm.io) que é o gerenciador usado em projetos IARES por padrão.
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
