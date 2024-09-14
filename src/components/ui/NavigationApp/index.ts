import { FamIcon } from "fam-code-ui";
import { css, tsx } from "iares";

type Props = {
  previous: string;
  next: string;
};

type Params = { props: Props };

const template = ({ props }: Params) => tsx`
<div class="wrap-nav-ctx">
  ${
    props.previous &&
    tsx`
    <a href="#/${props.previous}">
     <${FamIcon} name="chevron_left" size="2" /> Previous
    </a>
  `
  }
  ${props.previous && props.next ? tsx`<i class="divider"></i>` : ""}
  ${
    props.next &&
    tsx`
    <a href="#/${props.next}">
      Next <${FamIcon} name="chevron_right" size="2" />
    </a>
  `
  }
</div>
`;

export const NavigationApp = ({ props }: Params) => {
  return { template, styles, props };
};

const styles = () => css`
navigation-app,
.wrap-nav-ctx {
  display:flex;
  width:100%;
}

.wrap-nav-ctx {
  justify-content: center;
  align-items: center;

  padding:1em 0 1em 0;
  overflow:hidden;
}

.wrap-nav-ctx a {
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 0 2em;
}

.wrap-nav-ctx a:hover {
  text-decoration: underline
}

.divider {
  border-left:1px var(--border-color) solid;
  height: 2em
}


`;
