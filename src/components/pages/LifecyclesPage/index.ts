import { MenuApp, TemplatePage } from "@/components/ui";
import { createTemplatePageActions } from "@/componentsui/TemplatePage/actions";
import { createTemplatePageHooks } from "@/componentsui/TemplatePage/hooks";
import { css, tsx, mdx } from "iares";

const ContentApp = () => mdx`
# Lifecycle hooks
---

See how simple and easy to understand the timeline of the IARES component lifecycle is.

![components lifecycle](/assets/images/lifecycle.png)

## Types and chronology

Each lifecycle hook is called at the appropriate time. The execution order of the hooks when declared is:

1. **beforeMount** - Executed before mounting the component.
2. **beforeRender** - Executed before rendering the component’s HTML.
3. **afterRender** - Executed after rendering the component’s HTML.
4. **afterMount** - Executed after completing the component's mounting.
5. **destroy** - Executed just before destroying the component.

## Declaring hooks

In IARES, hooks are simply functions. However, for the sake of organization and modularity, you can create hooks using factories.

Below are examples of how IARES hooks can be declared.

- **Simple declaration:**

A simple declaration can be used in very basic cases where the given hook will execute only one action, which in turn will affect the behavior of the component.

~~~js
//HelloApp/index.ts
import { tsx } from 'iares';

const template = () => tsx\`
<h1>Hello!</h1>
\`
export const HelloApp = () => {

  const hooks = {
    beforeMount() {
      console.log('Hello!')
    }
  }

  return { template, hooks }
}
~~~

- **Factory declaration:**

The declaration via a factory function can be used when a set of hooks is required to define behaviors through the execution of different component actions.

~~~js
//HelloApp/hooks/index.ts
type THelloAppActions = {
  showLocationHash: () => void;
}

export const HelloAppCreateHooks = (actions: THelloAppActions) => {
  const afterMount = () => {
    window.addEventListener('hashchange', showLocationHash)
  }
  const destroy = () => {
    window.removeEventListener('hashchange', showLocationHash)
  }
  return { beforeMount, destroy }
}
~~~

In the example above, two hooks were declared: **afterMount** and **destroy**.

The **afterMount** function will be executed after the component is mounted, and an event listener will be added. Through the event listener, log messages will be displayed in the browser console when the location hash changes.

The **destroy** function will be executed just before the component is destroyed and will remove the **hashchange** event listener.

### Using hooks factory

In the previous example, a factory was declared to create the **beforeMount** and **destroy** hooks. Moving forward, it’s possible to import this factory and use it to define the component’s behavior.

~~~js
//HelloApp/index.ts
import { tsx } from 'iares';
import { HelloAppCreateHooks } from './hooks'

const template = () => tsx\`
<h1>Hello!</h1>
\`
export const HelloApp = () => {

  const actions = {
    showLocationHash() {
      console.log(window.location.hash)
    }
  }

  const hooks = createHooks(actions)

  return { template, hooks }
}
~~~

You can add any of the five hooks supported in IARES components. By adopting this strategy, you can improve modularization and facilitate the application of unit tests.

`;

const template = () => tsx`
  <${TemplatePage}
    leftSidebar=${MenuApp}
    content=${ContentApp}
    navigation=${{ previous: "scaffolding", next: "components" }}
  />
`;

export const LifecyclesPage = () => {
  const actions = createTemplatePageActions();
  const hooks = createTemplatePageHooks(actions);
  return { template, styles, actions, hooks };
};

const styles = () => css`
  lifecycles-page {
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: flex-start;
    width:100%;
  }

  lifecycles-page content-app {
    display:block;
    float:left;
    width:100%;
  }
`;
