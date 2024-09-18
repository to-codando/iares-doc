import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Routes
---
Work in progress...
`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "state", next: "good-parts" }}
  />
`;

export const RoutesPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  routes-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  routes-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
