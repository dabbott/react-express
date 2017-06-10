import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Components have a lifecycle: they are instantiated, mounted, rendered, and eventually updated, unmounted, and destroyed. The lifecycle helps manage the complexity of browser APIs by providing a simple, consistent abstraction layer. The lifecycle also allows you to optionally execute custom code at each step for more fine-grained control of the rendering.

Let's look at each phase of the component lifecycle.

## Mounting Cycle

* \`constructor(object props)\`\\
The component class is instantiated. The parameters to the constructor are the element's initial \`props\`, as specified by the parent element. You can optionally specify an initial state for the element by assigning an object to \`this.state\`. At this point, no native UI has been rendered yet for this element.

* \`componentWillMount()\`\\
This method is invoked only once, before rendering occurs for the first time. At this point, there is still no native UI rendered for this element.

* \`render() -> React Element\`\\
The render method must return a React Element to render (or null, to render nothing).

* \`componentDidMount()\`\\
This method is invoked only once, after rendering occurs for the first time. At this point, the native UI for this element has finished rendering, and may be accessed through \`this.refs\` for direct manipulation. If you need to make async API calls or execute delayed code with \`setTimeout\`, that should generally be done in this method.

## Updating Cycle

* \`componentWillReceiveProps(object nextProps)\`\\
The parent of this component has passed a new set of \`props\`. This component will re-render. You may optionally call \`this.setState()\` to update this component's internal state before the \`render\` method is called.

* \`shouldComponentUpdate(object nextProps, object nextState) -> boolean\`\\
Based on the next values of \`props\` and \`state\`, a component may decide to re-render or not to re-render. The base class's implementation of this method always returns \`true\` (the component <i>should</i> re-render). For optimization, override this method and check if either \`props\` or \`state\` have been modified, e.g. run an equality test of each key/value in these objects. Returning \`false\` will prevent the \`render\` method from being called.

* \`componentWillUpdate(object nextProps, object nextState)\`\\
This method is invoked, after the decision has been made to re-render. You may not call \`this.setState()\` here, since an update is already in progress.

* \`render() -> React Element\`\\
This method is called, assuming \`shouldComponentUpdate\` returned \`true\`. The render method must return a React Element to render (or null, to render nothing).

* \`componentDidUpdate(object prevProps, object prevState)\`\\
This method is invoked after re-rendering occurs. At this point, the native UI for this component has been updated to reflect the React Element returned from the \`render()\` method.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
