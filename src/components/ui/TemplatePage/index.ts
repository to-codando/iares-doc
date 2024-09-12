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
          <div class="xxl-col-1
            xy-align-center
            xs-col-start-1 xs-col-end-4
            sm-col-start-1 sm-col-end-3
            lg-col-start-1 lg-col-end-3 
            xl-col-2 
            xxl-col-2
         ">
           <${LogoApp}/>
          </div>
          <div class="
            xy-align-center
            xs-col-start-5 xs-col-end-10
            sm-col-start-5 sm-col-end-10
            lg-col-start-4 lg-col-end-11 
            xl-col-start-4 xl-col-end-10
            xxl-col-start-5 xxl-col-end-9
         ">
             <${SearchApp}/>
          </div>
          <div class="
            xy-align-center
            xs-col-start-11 xs-col-end-13
            sm-col-start-11 sm-col-end-13
            lg-col-start-12 lg-col-end-13 
            xl-col-start-12 xl-col-end-13
            xxl-col-start-12 xxl-col-end-13
          ">
              <${SocialIconApp} name="github"/>
          </div>
        </div>
      </div>
    </div>
    <div class="body-content-ctx">
      <div class="side-wrap-ctx side-left-ctx">
          <${SidebarApp} content=${props.leftSidebar}/>
      </div>
      <div class="content-wrap-ctx">
        <${props.content} />
      </div>
      <div class="side-wrap-ctx side-right-ctx">
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
    padding:2em 2em 8em 2em;
    border-left: 1px var(--border-color) solid;
    border-right: 1px var(--border-color) solid;
    overflow:hidden;
    overflow-y: scroll;
  }

  .side-wrap-ctx {
    padding: 4em 0 0 0;

  }


  @media all and (max-width:1180px) {
    .content-wrap-ctx {
      border-right:0
    }
    .body-content-ctx {
      grid-template-columns: 250px 1fr;
    }

    .side-left-ctx{}
    .side-right-ctx {
      display: none;
    }
  }
  @media all and (max-width:980px) {
    .content-wrap-ctx {
      border-right:0;
      border-left:0;
    }
    .body-content-ctx {
      grid-template-columns: 1fr;
    }

    .side-left-ctx,
    .side-right-ctx {
      display: none;
    }
  }

`;
