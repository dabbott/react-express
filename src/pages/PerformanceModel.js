import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
React is built for performance; React is used to build massively complex interfaces with thousands of elements, each one potentially responding to user interaction. Because performance is so core to React, let's take a look at the high level performance model.

Operation | Cost | Description
--- | --- | ---
DOM manipulation | Slow | Modifying the DOM is slow. React is built to modify that DOM as *little* as possible. React builds an in-memory representation of the components you render, and then syncs this representation to the DOM. As you update components, React will update the in-memory representation, and then make the least amount of changes to the DOM possible. This is what keeps your application fast. React does this automatically most of the time - however, you can give hints about when and how to update the DOM to improve performance. This is especially relevant when dealing with hundreds or thousands of components, in the case of large lists.
Component render | Fast | Components can re-render very frequently without a noticeable performance impact. It's common for \`render\` to be called many times as the \`state\` or \`props\` of a component change. This is part of the magic of React, but can also be confusing at first. In other JavaScript libraries, you may have tried to reduce calls to \`render\` in order to limit DOM updates and improve performance. In React, reducing re-renders is something you only need to think about for particularly complex or expensive components. Note: when we say "render", this generally refers to the \`render\` method of your components getting called as part of the component lifecycle. This doesn't refer to actually updating the DOM, which React handles automatically based on what you return from your \`render\` methods.
\`shouldComponentUpdate\` | Very fast | In cases where component \`render\` is happening too frequently and causing performance issues, React gives you more control over the component lifecycle with \`shouldComponentUpdate\`, allowing you to choose exactly when a component does and doesn't re-render. When this method isn't defined, components will *always* re-render whenever their \`state\` or \`props\` change. Defining \`shouldComponentUpdate\` allows you to manually compare whatever data you need to determine whether or not the component should re-render. Return \`true\` to trigger a \`render\` call and \`false\` to prevent it.

It's best practice to write your components in a way that limits the number of \`render\` calls, even when performance isn't an issue. It tends to be easier to reason about and debug components that only update when necessary, and it's easier to optimize components written this way. It's generally no more or less code, but rather a different way of writing the same component.

The examples in the following sections are too small and simple for performance to be a problem, so we won't need to use \`shouldComponentUpdate\`. React is fast by default, only slowing down in extreme cases, so you can safely skip the \`shouldComponentUpdate\` until you notice sluggish app behavior.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
