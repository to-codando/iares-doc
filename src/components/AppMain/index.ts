import { css, html } from "iares";
import { appMainCreateActions } from "./actions";
import { AppMainCreateHooks } from "./hooks";

export const template = () => html`
  <div class="wrap-ctx">
    <router-view></router-view>
  </div>
`;

export const AppMain = () => {
  const actions = appMainCreateActions();
  const hooks = AppMainCreateHooks(actions);
  return {
    template,
    styles,
    actions,
    hooks,
  };
};

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height:auto;
  }
`;
