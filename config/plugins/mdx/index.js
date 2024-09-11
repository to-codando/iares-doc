import fs from "fs";
import { compile } from "@mdx-js/mdx";
import htm from "htm";
import { createElement } from "react";

const html = htm.bind(createElement);

export function mdx() {
  return {
    name: "mdx",
    setup(build) {
      build.onLoad({ filter: /\.mdx$/ }, async (args) => {
        const contents = fs.readFileSync(args.path, "utf8");

        // Compila o conteúdo MDX para JavaScript
        const compiledMDX = await compile(contents, {
          jsx: false,
          format: "mdx",
        });

        // Converte o conteúdo MDX para JavaScript utilizável
        const jsContent = `
          import { html } from 'htm';
          
          // Converte o conteúdo MDX para HTML e exporta como um componente HTM
          export default html\`${compiledMDX}\`;
        `;

        return {
          contents: jsContent,
          loader: "js",
        };
      });
    },
  };
}
