import type { SearchActions } from "./types";

export const createSearchHooks = (actions: SearchActions) => {
  const afterRender = (element: HTMLElement) => {
    actions.searchFocus(element);
  };
  return { afterRender };
};
