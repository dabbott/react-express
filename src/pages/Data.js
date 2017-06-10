import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Most apps have some kind of dynamic data: user info, images, documents, contacts, etc. There are several ways to manage data throughout an app, and the best choice depends on the complexity of an app. When in doubt, start simple, and as your application grows in complexity, use something more advanced.

# Common Options for Managing Data

Option | Description
--- | ---
**Component State** | Storing data in the \`state\` of your components is the simplest way to manage data throughout your app. Every time the user interacts with the app, update the state of a component, or use function \`props\` to update the state in parent components. It can be advantageous to maintain all state in the root component of the app, so that all state is managed in one place, making it easier to reason about the app and enabling you to easily switch to Redux if necessary.
**Redux** | [Redux](https://facebook.github.io/react-native/docs/getting-started.html) is the most popular choice of library for managing data in medium and large apps. Redux provides a \`store\` object which maintains the application state, and can notify your React components when state changes. Redux was designed with React in mind, and has official React bindings: [React Redux](https://github.com/reactjs/react-redux). There are additional tools around Redux to provide: control over asynchronous events, data persistence (for offline usage, etc), and more powerful debugging.

Let's take a more in-depth look at each of these options.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
