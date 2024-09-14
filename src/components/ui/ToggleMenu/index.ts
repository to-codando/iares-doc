import { store, actions } from "@/store";
import { FamIcon } from "fam-code-ui";
import { createState, css, tsx } from "iares";

type TMenuState = {
  menuIsVisible: boolean;
};

type Params = {
  state: TMenuState;
  actions: { toggleMenu: () => void };
};

const template = ({ actions, state }: Params) => tsx`
<div class="wrap-ctx" onClick=${() => actions.toggleMenu()}>
 <${FamIcon}
    name=${state.menuIsVisible ? "close" : "menu"}
    size="2"
  />
</div>
`;

export const ToggleMenu = () => {
  const state = createState<TMenuState>({
    menuIsVisible: store.state.menuIsVisible || false,
  });
  store.watchState(({ menuIsVisible }) => {
    state.setState({
      menuIsVisible,
    });
  });
  return { template, styles, state, actions };
};

const styles = () => css`
  toggle-menu {
    cursor: pointer;
  }
`;
