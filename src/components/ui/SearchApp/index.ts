import { FamIcon, FamTextInput } from "fam-code-ui";
import { type TState, createState, css, tsx } from "iares";
import { createSearchActions } from "./actions";
import { createSearchHooks } from "./hooks";
import type { SearchParams, SearchState } from "./types";

const template = ({ actions, state }: SearchParams) => tsx`
  <div class="wrap-ctx">
    <div class="search-ctx">
     <${FamTextInput}
        type="text"
        label=""
        handler=${actions.searchHandler}
        value=${state.value}
        debounceTime="500"
      require="required"
    />
</div>
    <div class="icon-ctx">
      <${FamIcon} name="search"/>
    </div>
  </div>
`;

export const SearchApp = () => {
  const state = createState<SearchState>({ value: "" });
  const actions = createSearchActions(state);
  const hooks = createSearchHooks(actions);

  return {
    template,
    styles,
    state,
    actions,
    hooks,
  };
};

const styles = () => css`
  search-app,
  .wrap-ctx,
  .search-ctx,
  .icon-ctx {
    display:flex;
  }

  search-app,
  .wrap-ctx,
  .search-ctx {
    width: 100%;
    position: relative;
  }

  .icon-ctx {
    align-items: center;
    justify-content:center;
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    padding: 8px 0 0 0;
    width:3em;
  }

  .icon-ctx span { color: var(--icon-color)}

  .search-ctx input {
    padding: 1em 50px 1em 1em !important;
    color: #f00
  }
`;
