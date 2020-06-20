import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
React apps are most commonly built with Webpack and Babel, using \`npm\` as a package manager. While there are many other build tools and plugins, these 3 are the most common/essential. Even the \`create-react-app\` utility uses these behind the scenes.

If you're new to JavaScript development, or if you haven't started a new project in a while, some of these might be unfamiliar. For each, we'll cover: what it does, why you need it, and how to use it.

If you choose to set up your project with \`create-react-app\` (recommended), you don't need to install \`webpack\` or Babel. However, it's still valuable to understand these tools at a high level, so I recommend you skim through each section.

Let's get started!
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
