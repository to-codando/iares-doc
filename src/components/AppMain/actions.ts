import { store, actions } from "@/store";
import type { AppMainActions } from "./types";

export const appMainCreateActions = (): AppMainActions => {
  const hideMobileMenu = () => {
    actions.hideMenu();
  };
  const hideMobileMenuOnHashChanges = () => {
    window.addEventListener("hashchange", () => {
      actions.hideMenu();
      console.log("ok");
    });
    console.log("loaded");
  };
  return { hideMobileMenu, hideMobileMenuOnHashChanges };
};
