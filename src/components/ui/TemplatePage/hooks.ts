import type { TTemplatePageActions } from "./types";

export const createTemplatePageHooks = (actions: TTemplatePageActions) => {
  const afterRender = async () => {
    actions.applyCodeHighlights();
  };
  return { afterRender };
};
