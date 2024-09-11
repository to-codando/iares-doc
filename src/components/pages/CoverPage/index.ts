import { css, tsx } from "iares";

const template = () => tsx`
  <div class="wrap-ctx">
    <div class="content-ctx">
      <article>
      <img
        class="logo-ctx"
        src="/assets/images/iares.png" 
        alt="IARES - A simple reactive library"
      />
      <h1>A open source, simple and powerful library to develop reactive aplications.</h1>
      <p>
        <span>easy development of</span>
      <ul>
        <li>
          Web,
        </li>
        <li>
          Mobile
        </li>
        <li>
          and Desktop
        </li>
      </ul>
      </p>
      </article>
    </div>
    <div class="content-ctx">
      <a href="#/get-started">Get Started</a>
    </div>
  </div>
`;

export const CoverPage = () => ({
  template,
  styles,
});

const styles = () => css`
  cover-page,
  .wrap-ctx {
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100vh;
  }
  
  .content-ctx {
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:100%;
    max-width:1280px;
    padding:1em;
  }

  .logo-ctx {
    width: 100%;
    max-width: 480px;
  }

  .wrap-ctx h1, 
  .wrap-ctx p,
  .wrap-ctx span,
  .wrap-ctx article,
  .wrap-ctx ul,
  .wrap-ctx a{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 100%;
    text-align:center;
  }

  .wrap-ctx article {
    max-width: 680px;
  }

  .wrap-ctx  h1 {
    font-size: 2.5em; 
    line-height: 1.2em;
    margin: 2em 0;
  }

  .wrap-ctx p {
    font-size: 1.2em;
    line-height: 1.8em;
  }
  
  .wrap-ctx ul {
    padding:0;
    text-align: center;
    justify-content:center;
  }

  .wrap-ctx li {
    list-style: none;
    padding: 0 0 0 0.3em;
    font-weight: 600;
    font-size: 1.2em;
  }

  .wrap-ctx a {
    max-width: 220px;
    border: 2px #c92062 solid;
    border-radius: 50px;
    padding: 1em 2em;
    background: #FF2B77;
    box-shadow: 0 0 15px #FF2B77;
    color: #661733;
    font-weight: bold;
    font-size: 1.2em;  
    margin-top: 2em;
  }
`;
