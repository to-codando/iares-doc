import { css, tsx } from "iares";

const template = () => tsx`
<a href="https://github.com/to-codando/iares" target="_blank">  
  <img src="/assets/images/github-mark.svg" alt="Github"/>
</a>

`;

export const SocialIconApp = () => ({ template, styles });

const styles = () => css`
  social-icon-app {
    display:flex;
    width:32px;
    height: 32px;
    justify-content:center;
    align-items:center;
  }

  social-icon-app > a {
    display:flex;
    width:32px;
    height:32px;
  }

  social-icon-app img {
    width: 100%;
    filter: brightness(3.5);
    cursor:pointer;
  }
`;
