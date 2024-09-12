import { type TRoute, html, render } from "iares";
import {
  DefaultPage,
  CoverPage,
  GetStartedPage,
  ScaffoldingPage,
  LifecyclesPage,
  ComponentsPage,
  StatePage,
  RoutesPage,
  GoodPartsPage,
  MotivationsPage,
} from "@/components/pages";
export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${DefaultPage} />`, context);
    },
  },
  {
    regex: /^#\/$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${CoverPage}/>`, context);
    },
  },

  {
    regex: /^#\/getting-started$/,
    mount: ({ context }) => {
      render(html`<${GetStartedPage}/>`, context);
    },
  },

  {
    regex: /^#\/scaffolding$/,
    mount: ({ context }) => {
      render(html`<${ScaffoldingPage}/>`, context);
    },
  },

  {
    regex: /^#\/lifecycles$/,
    mount: ({ context }) => {
      render(html`<${LifecyclesPage}/>`, context);
    },
  },

  {
    regex: /^#\/components$/,
    mount: ({ context }) => {
      render(html`<${ComponentsPage}/>`, context);
    },
  },

  {
    regex: /^#\/state$/,
    mount: ({ context }) => {
      render(html`<${StatePage}/>`, context);
    },
  },

  {
    regex: /^#\/routes$/,
    mount: ({ context }) => {
      render(html`<${RoutesPage}/>`, context);
    },
  },

  {
    regex: /^#\/good-parts$/,
    mount: ({ context }) => {
      render(html`<${GoodPartsPage}/>`, context);
    },
  },

  {
    regex: /^#\/motivations$/,
    mount: ({ context }) => {
      render(html`<${MotivationsPage}/>`, context);
    },
  },
];
