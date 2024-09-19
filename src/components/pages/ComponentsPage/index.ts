import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Components
---

IARES components are functions that should return HTML, JSX, TSX, or MDX templates and CSS styles.

Here is an example of a simple component.

~~~js
import { tsx } from 'iares';

const template = () => tsx\`
  <button>
    Say hello!
  </button>
\`

export const ButtonApp = () => ({
  template,
  styles
})

const styles = () => css\`
  button-app {
    display: flex;
  }
\`
~~~

Note that the **template** and **styles** functions are injected into the component using object composition techniques.

## Template

A template in IARES components is just a function that can return HTML, JSX, TSX, or even MDX.

> *JSX, TSX, and MDX* are notations capable of combining JavaScript or TypeScript syntax with HTML elements and Markdown markup respectively.

### Template Parameters

The template has the ability to access the following parameters:

- **props** - Data properties provided through the component's attributes.
- **state** - An object containing data keys from the state manager tied to the component.
- **actions** - Functions capable of performing operations and defining the component's reactive behavior.

Below is an example of how to declare and access template parameters.

~~~js
import { tsx, createState } from 'iares';
import { debounce } from '@/utils';

type TProps = {
  value: number;
}

type TState = {
  total: number;
}

type TActions = {
  doubleValue: () => void;
}

type TParams = {
  props: TProps;
  state: TState;
  actions: TActions;
}

const template = ({ state, props, actions }: TParams) => tsx\`
  <label>
    <span> The double of:</span>
    <input type="text" onkeyup=\${debounce(actions.doubleValue)}/> is \${state.total}
  </label>
\`

export const DoubleValueApp = ({ props }: TProps) => {
  const state = createState<TState>({ total: props.value || 0 })

  const actions = {
    doubleValue: (value: number) => {
      const total = value * 2;
      state.setState({ total })
    }
  }

  return { template, state, props, actions }
}
~~~

Note that the resources returned in **DoubleValueApp** are accessed via the template function in the component's view.

> IARES is smart enough to provide the composed property **template** with the other three properties **state**, **props**, and **actions**, thus ensuring complete flexibility in managing how the component reacts to state changes and what information should be displayed.

## Composition API

In the previous sections, the ButtonApp component was composed of the **template** and **styles** functions. However, there are other properties that can be part of IARES component composition.

Below are all the properties that can be part of IARES components:

- **template** - A function that returns a template literal containing HTML elements and other components.
- **styles** - A function that returns a template literal containing the component's CSS styles.
- **props** - Data properties provided by other components through HTML attributes.
- **state** - Observable data through which the component can react to state changes.
- **actions** - Functions capable of performing operations and defining reactions programmatically.
- **hooks** - Specific functions executed in the lifecycle of IARES components.

To learn more about **state** and **hooks**, visit their respective sections via the links:
- [State](#/state)
- [Lifecycle hooks](#/lifecycles)

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "lifecycles", next: "state" }}
  />
`;

export const ComponentsPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  components-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  components-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
