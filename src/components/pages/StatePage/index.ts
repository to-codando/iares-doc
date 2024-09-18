import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# State
---

Work in progress...
`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "components", next: "routes" }}
  />
`;

export const StatePage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  state-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  state-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
