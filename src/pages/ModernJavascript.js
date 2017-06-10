import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
In the old days, you could just include a \`${"<script>"}\` tag in the header of your webpage, and your JavaScript would run as intended. These days, we *preprocess* our JavaScript with Babel in order to access experimental features and language extensions like JSX.

# ES5

ECMAScript is the language specification used to implement the JavaScript language. Nearly every JavaScript environment today can run at least ECMAScript 5 (ES5), the version of JavaScript introduced in 2009. However, there are many new features in the latest versions of JavaScript that we'd like to use. Thanks to Babel, we can use them today! Babel transforms newer features into ES5 for cross-platform compatibility.

<br />

In the next few sections, we'll look through some of the most important new language features. If you're already comfortable with these, or if you would prefer to stick to the JavaScript features you're familiar with, consider skipping ahead to [JSX](jsx) (the React language extension) or [React Top-Level API](react_api).
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
