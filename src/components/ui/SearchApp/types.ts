import type { TState } from "iares";

export type SearchState = {
  value: string;
};

export type SearchActions = {
  searchHandler: (event: KeyboardEvent) => void;
  searchFocus: (element: HTMLElement) => void;
};

export type SearchParams = {
  actions: SearchActions;
  state: SearchState;
};

export type createSearchActions = (store: TState<SearchState>) => SearchActions;
