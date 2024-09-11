import { type HTMType, css, tsx } from "iares";

type Props = {
  content: () => HTMType | HTMType[];
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => tsx`
  <div class="wrap-ctx">
      <${props.content} />
  </div>
`;

export const SidebarApp = ({ props }: Params) => ({
  template,
  styles,
  props,
});

const styles = () => css`
  sidebar-app,
  .wrap-ctx {
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
  }
`;
