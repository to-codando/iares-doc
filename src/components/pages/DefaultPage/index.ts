import { TemplatePage } from "@/components/ui";
import { css, mdx, tsx } from "iares";

const Content = () => mdx`
  # 404
  Página não encontrada
 `;

export const template = () => tsx`
  <${TemplatePage} content=${Content}/>
`;

export const DefaultPage = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  default-page {
    display: flex;
    justify-content: center;
    width:100%;
  }

  .wrap-ctx h1 {
    font-size: 6em;
    color: var(--black-light)
  }

  .wrap-ctx a {
    color: var(--green-bright)
  }
`;
