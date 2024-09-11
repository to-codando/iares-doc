import { css, html } from "iares";

const template = () => html`
  <div class="menu-ctx">
   <ul>
     <li>
       <a href="#/">Item sidebar 1</a>
     </li>
     <li>
       <a href="#/">Item sidebar 2</a>
     </li>
     <li>
       <a href="#/">Item sidebar 3</a>
     </li>
     <li>
       <a href="#/">Item sidebar 4</a>
     </li>
     <li>
       <a href="#/">Item sidebar 5</a>
     </li>
     <li>
       <a href="#/">Item sidebar 6</a>
     </li>
   </ul>
   
  </div>
`;

export const AppMenu = () => ({ template, styles });

const styles = () => css`
  app-menu, .menu-ctx {
    display: flex;
    width:100%;
  } 
`;
