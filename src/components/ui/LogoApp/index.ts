import { css, tsx } from "iares";

const template = () => tsx`
  <div class="wrap-ctx">
    <h1>
      <a href="#/">
        <img src="/assets/images/iares.png" alt="IARES"/>
      </a>
    </h1>
  </div>
`;

export const LogoApp = () => ({ template, styles });

const styles = () => css`
  logo-app,
  .wrap-ctx {
    display:flex;
    width: 100%;
    height:100%;
    justify-content:center;
    align-items:center;
  }
  .wrap-ctx > a,
  .wrap-ctx  img {
    width:100%;
  }

  .wrap-ctx h1 {
    font-size:0;
  }

  @media all and (min-width: 1080px) {
    .wrap-ctx  img {
      width:80%;
    }
  }
`;
