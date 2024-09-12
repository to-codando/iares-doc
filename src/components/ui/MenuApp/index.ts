import { css, tsx } from "iares";

const template = () => tsx`
  <ul class="list-ctx">
    <li><a href="#/getting-started">Getting Started</a></li>
    <li><a href="#/scaffolding">Scaffolding</a></li>
    <li><a href="#/lifecycle">Lifecycle</a></li>
    <li><a href="#/components">Components</a></li>
    <li><a href="#/state">State</a></li>
    <li><a href="#/routes">Routes</a></li>
    <li><a href="#/good-parts">Good parts</a></li>
    <li><a href="#/motivation">Motivation</a></li>
  </ul>
`;
export const MenuApp = () => ({ template, styles });

const styles = () => css`
    menu-app,
    .list-ctx,
    .list-ctx > li,
    .list-ctx > li > a {
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        width:100%;
    }
    .list-ctx {
      flex-wrap:wrap;
      padding:0;
     }

    .list-ctx > li {
      margin-top: 1em;
      padding:0;
    }
    .list-ctx > li:first-of-type {
      margin-top:0
    }

    .list-ctx > li > a {
      font-size: .875em
    }

    .list-ctx > li > a:hover {
      text-decoration: underline;
    }
`;
