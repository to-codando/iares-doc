import type { ActionType } from "./types";

export const createActions: ActionType = (store) => {
  const toggleMenu = () => {
    store.setState({
      ...store.state,
      menuIsVisible: !store.state.menuIsVisible,
    });
  };

  return {
    toggleMenu,
  };
};
