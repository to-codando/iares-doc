import type { TState } from "iares";
import type { SearchActions, SearchState } from "./types";

export const createSearchActions = (
  store: TState<SearchState>,
): SearchActions => {
  const searchHandler = (event: KeyboardEvent) => {
    const { value } = event.target as HTMLInputElement;
    store.setState({ ...store.state, value });
    console.log(store.state);
  };

  const searchFocus = (element: HTMLElement) => {
    const searchInput = element.querySelector("input");
    searchInput?.focus?.();
    const length = searchInput?.value.length || 0;
    searchInput?.setSelectionRange?.(length, length);
  };

  return { searchHandler, searchFocus };
};
