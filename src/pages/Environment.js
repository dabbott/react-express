import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
There are two common ways to set up a React development environment: [\`create-react-app\`](https://github.com/facebookincubator/create-react-app) and [webpack](https://webpack.js.org/).

Both options are based on \`npm\`, the \`node.js\` package manager. We'll cover \`npm\` separately, if you're not familiar with it.

If you'd rather skip environment setup for now, feel free to jump ahead to the [Modern JavaScript](modern_javascript) or [React API](react_api) sections. This site uses an embedded React editor so you don't need a local environment to go through the examples.

# Create React App

Facebook provides a command-line utility called \`create-react-app\` which automatically sets up a new React project with a sensible default project structure and feature set. This is the best way to get started as a beginner.

You'll likely outgrow this option pretty quickly as you get a better grasp of React and want to customize your stack. Fortunately, \`create-react-app\` offers an \`eject\` option to export your app, so you're not locked in.

We'll walk through this in the next section, [Quick Start](quick_start).

# Webpack

Webpack bundles your client-side code (JavaScript, css, etc) into a single JavaScript file. Webpack is the most common way to bundle a React app during development and for production. If you want more flexibility and power than \`create-react-app\`, you should learn how to use Webpack and the Babel plugin (for compiling your ES2015/JSX code for browser compatibility).

<br />

The following sections will cover the tools you need to build a React app either using \`create-react-app\` or from scratch using Webpack.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
