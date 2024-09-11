import { type HTMType, css, mdx } from "iares";

type Props = {
  content: HTMType;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => {
  const values = `${props.content}`;
  return mdx`
  \`\`\`js
    ${values}
  \`\`\`
`;
};

export const CodeApp = ({ props }: Params) => ({
  template,
  styles,
  props,
});

const styles = () => css``;
