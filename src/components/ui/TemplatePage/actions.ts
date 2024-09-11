import type { TTemplatePageActions } from "./types";
import prismjs from "prismjs";
export const createTemplatePageActions = (): TTemplatePageActions => {
  const applyCodeHighlights = () => {
    prismjs.highlightAll();
  };

  return { applyCodeHighlights };
};
