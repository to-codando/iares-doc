import { LogoApp, SearchApp, SidebarApp, SocialIconApp } from "@/components/ui";
import type { TemplateType } from "@/utils/types";
import { type HTMType, css, mdx, render, tsx } from "iares";

type ComponentType = () => HTMType | HTMType[];

type Props = {
  content: string[] | TemplateType<ComponentType>[];
  leftSidebar: TemplateType<ComponentType>;
  rightSidebar: TemplateType<ComponentType>;
};
type Params = { props: Props };

const template = ({ props }: Params) => {
  return tsx`
 <div class="wrap-ctx">
    <div class="header-ctx">
      <div class="header-content-ctx">
        <div class="grid grid-cols-12">
          <div class="xxl-col-1">
           <${LogoApp}/>
          </div>
          <div class="xxl-col-start-5 xxl-col-end-9 xy-align-center">
             <${SearchApp}/>
          </div>
          <div class="xxl-col-start-12 xx-col-end-13 xy-align-center">
              <${SocialIconApp} name="github"/>
          </div>
        </div>
      </div>
    </div>
    <div class="body-content-ctx">
      <div class="side-wrap-ctx">
          <${SidebarApp} content=${props.leftSidebar}/>
      </div>
      <div class="content-wrap-ctx">
        <${props.content} />
      </div>
      <div class="side-wrap-ctx">
          <${SidebarApp} content=${props.rightSidebar}/>
      </div>
    </div>
    <div class="footer-ctx">
    </div>
 </div>
`;
};

export const TemplatePage = ({ props }: Params) => {
  return { template, styles, props };
};

const styles = () => css`
  template-page,
  .wrap-ctx,
  .header-ctx,
  .header-content-ctx,
  .body-content-ctx,
  .content-wrap-ctx,
  .footer-ctx,

  .wrap-logo-ctx {
    display:flex;
    flex-wrap:wrap;
    width:100%;
  }
  .wrap-ctx {
    justify-content:center;
    align-items: flex-star;
    height: 100vh;
    padding-top:75px;
  }
  .header-ctx {
    justify-content: center;
    height:75px;
    border-bottom: 1px var(--border-color) solid;
    position:fixed;
    top:0;
    left:0;
    z-index: 100;
    background: #1b1f2b;
  }
  .header-content-ctx {
    max-width:1280px;
    padding: 0 1em;
  }
  .body-content-ctx {
    display:grid;
    grid-template-columns: 200px 1fr 200px;
    grid-gap: 0 1em;
    padding: 0 1em 1em 1em;
    max-width: 1280px;
  }

  .wrap-logo-ctx {
    max-width:90px;
  }

  .content-wrap-ctx {
    height:calc(100vh - 75px);
    flex-direction: column;
    padding:2em 2em 0 2em;
    border-left: 1px var(--border-color) solid;
    border-right: 1px var(--border-color) solid;
    overflow:hidden;
    overflow-y: scroll;
  }

  .side-wrap-ctx {
    padding: 4em 0 0 0;

  }




`;
