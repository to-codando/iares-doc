import { type TRoute, html, render } from "iares";
import { DefaultPage, CoverPage, GetStartedPage } from "@/components/pages";
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
    regex: /^#\/get-started$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${GetStartedPage}/>`, context);
    },
  },
];
