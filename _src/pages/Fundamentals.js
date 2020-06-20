import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
The fundamental concept of React is simple: *declare* your UI in the render method of your components, and React will automatically ensure the DOM matches what you declared.

While this concept is simple, if you're used to writing code imperatively (e.g. manually creating, attaching, and updating DOM nodes) it can take a while to start "thinking in React". React is extremely flexible, letting you write a component in *many* different ways - however, certain ways are more idiomatic and more performant. Because of React's flexibility, it's important to understand conventions so that your code is performant and easy for others to jump into.

In the following sections, we'll take a look at the most common React APIs and patterns to help you start thinking in React.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
