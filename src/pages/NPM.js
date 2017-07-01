import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
\`npm\` is the package manager for \`node.js\`, the server-side JavaScript execution environment. Most React apps load the React library and 3rd party libraries/extensions through \`npm\` packages.

If you're new to JavaScript development, or if you've been using older libraries (e.g. jQuery, Backbone), you may not have used \`npm\` for client-side app development. While \`npm\` was originally intended for usage exclusively in \`node.js\` server-side code, it's now commonly used for client-side code too. Webpack makes this possible, but more on that later.

There are two common ways to install \`npm\`: you can install \`node.js\` (which includes \`npm\`), or you can install \`nvm\` (which helps manage multiple versions of \`node\` and \`npm\`). If you're just dabbling in React, it's easiest to install \`node.js\` directly from the official website. If you plan on using React for serious/large projects, it's best to use \`nvm\`, since at some point you'll want to upgrade versions.

# Installation

## Option 1. Installation from the node.js site

You can install the \`node.js\`/\`npm\` binary [here](https://nodejs.org/en/). This is the easiest way to get up and running.

## Option 2. Installation via \`nvm\`

You can find the instructions for installing \`nvm\` [here](https://github.com/creationix/nvm). It looks a bit intimidating, but it's worth it if you'll be doing a lot of React development. Double check in the instructions that your platform and shell are supported (e.g. Windows isn't officially supported).

Since \`nvm\` just manages versions, once you install \`nvm\`, you'll still need to install any recent version of \`node\`:

\`\`\`
nvm install node
\`\`\`

And then specify that you want to use that version with

\`\`\`
nvm use node
\`\`\`

These and many more instructions exist in the docs linked above.

## Option 3. Installation via package manager (Homebrew, etc)

You can generally install either \`node\` or \`nvm\` through your package manager without much difficulty. If you're already using a package manager, you should give this a shot first. If all else fails, try the \`node.js\` binary from the node.js site - that is almost gauranteed to give you a working install.

# Basics

\`npm\` uses a file named \`package.json\` to record which packages your app depends on. This \`package.json\` file should live in the top level directory of your React project.

To add a \`package.json\` to a project, run

${<CodeBlock>{`npm init`}</CodeBlock>}

This will walk you through a command line prompt to add some basic details about your app. The details are optional, so feel free to just hit enter repeatedly until the prompt finishes.

When you type

${<CodeBlock>{`npm install`}</CodeBlock>}

\`npm\` automatically downloads all dependencies into a folder called \`node_modules\`. This folder will live alongside your \`package.json\`.

Make sure you commit the \`package.json\` to git so that others will use the same packages (and versions) as you when working on the project. It's uncommon to check in \`node_modules\`, since these tend to be large and can be downloaded based on the dependencies listed in the \`package.json\`.

To add a new dependency \`foo-bar\` to your \`package.json\`, run:

${<CodeBlock>{`npm install --save foo-bar`}</CodeBlock>}

> Note: If you're on npm version 5, you can leave off the \`--save\`. Prior to v5, \`--save\` was necessary to add the dependency to the \`package.json\`. Otherwise, the package would get installed, but not added as a dependency. In v5, \`--save\` is the default behavior.

> Also: If you're on npm version 5, when you install dependencies, a \`package-lock.json\` file will be automatically generated. This file helps ensure reproducible builds by locking down the exact version of dependencies. This file should also be committed into git.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
