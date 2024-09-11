// declarations.d.ts
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "env" {
  export const environment: "development" | "production";
}
