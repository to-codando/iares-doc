import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Motivations
---
Work in progress...
`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "good-parts" }}
  />
`;

export const MotivationsPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  motivations-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  motivations-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
