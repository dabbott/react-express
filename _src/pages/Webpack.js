import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
Webpack bundles your client-side code (JavaScript, css, etc) into a single JavaScript file. Webpack is *highly* configurable with plugins, allowing you to bundle nearly any kind of asset imaginable.

Webpack is a huge topic, and the official documentation is a work-in-progress. You'll likely run into issues and have to search for relevant stack overflow answers and git issues. For now, this is pretty normal, so expect to do some troubleshooting and don't get too discouraged!

You can find the Webpack docs [here](https://webpack.js.org/). The [overview](https://webpack.js.org/concepts/) of Webpack is very good.

> Note: if you're looking for a simple React setup, you don't need to install Webpack. You should instead use \`create-react-app\`, described in the [Quick Start](quick_start) section. Manually installing and configuring \`webpack\` gives you more control over your stack, but isn't necessary to get started with React.

# How it works

When you provide \`webpack\` with an entry file (the JavaScript file to run *first*, e.g. \`index.js\`), \`webpack\` will analyze the file and determine which other files it depends on via calls to \`require\` (the \`node.js\` API to include another file). It then cleverly concatenates all necessary files into a single file.

Webpack lets us use \`npm\` packages for client-side development by
- crawling your filesystem, reading calls to \`require\`, and bundling all necessary JavaScript files into a single file that can be served on the web
- polyfilling (faking) the \`node\` APIs so that code can run in both environments

# Minimal setup

Let's look at a minimal \`webpack\` setup. We won't add React just yet, since it's important to understand \`webpack\` basics before adding more complexity.

Feel free to follow along and treat this as a tutorial, or just read through and see how the pieces fit together. If you decide to follow along, make a new directory and run \`npm init\` inside it to get a blank \`package.json\`. The finished project is available at [dabbott/webpack-tutorial](https://github.com/dabbott/webpack-tutorial) for reference.

## Installation

Assuming we're in a directory with a \`package.json\` file, we can add \`webpack\` and the development server to a project with

${<CodeBlock>{`npm install --save-dev webpack webpack-dev-server`}</CodeBlock>}

This installs \`webpack\` and the development server as a dev dependency. In other words, this implies: \`webpack\` is necessary to build your project during development, but not when the project is already built for production or when consuming the project as a library.

## Scripts

We'll add two scripts to our \`package.json\` file in the \`scripts\` section:

${(
  <CodeBlock filename={"package.json"}>{`{
  ...
  "scripts": {
    "dev": "webpack-dev-server --env.dev",
    "build": "webpack"
  },
  ...
}`}</CodeBlock>
)}

The \`dev\` script will start our development server, passing the options \`${`{env: 'dev'}`}\` to our config file. The \`build\` script will save a single \`.js\` file on the filesystem for serving from a production server. We'll use these scripts shortly to bundle and test our app.

## Configuration

Webpack is most commonly configured using a separate config file: \`webpack.config.js\`. This file must export a configuration object, or a function which returns a configuration object, which the webpack compiler will use when run from the command line as \`webpack\`. Let's add a \`webpack.config.js\` now:

${(
  <CodeBlock filename={"webpack.config.js"}>{`module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },
  }
}`}</CodeBlock>
)}

There are only two essential fields: the entry point file, and the output file. Later, we can use options to specify a different configuration for development/production (remember, we pass \`${`{env: 'dev'}`}\` as options in our \`dev\` script).

## Essential files

Let's add the bare minimum files needed to see something on the screen. We'll create an \`index.js\` and an \`index.html\`:

${(
  <CodeBlock filename={"index.js"}>{`// index.js
document.write('Hello World!')`}</CodeBlock>
)}

${(
  <CodeBlock filename={"index.html"}>{`<!-- index.html -->
<script src="./bundle.js"></script>`}</CodeBlock>
)}

(Wondering why there's no html tag? It's convenient to omit [optional tags](https://google.github.io/styleguide/htmlcssguide.html#Optional_Tags)!)

## Running the development server

Now we can run \`npm run dev\` to run the script we set up in the \`package.json\`. This will start the development server. If we navigate to \`localhost:8080\` in a browser, we should see our \`index.html\` file, which will run our \`index.js\` bundled into \`bundle.js\`, displaying \`Hello World!\` on the screen.

![Hello World](webpack-hello-world.png)

The \`bundle.js\` file will be served from memory by the development server. For production builds, you'll want to use \`npm run build\` to build an optimized \`bundle.js\`, which will be saved to the filesystem.

For reference, our directory should look like this:

![Hello World](webpack-sublime.png)

## That's it!

Those are the steps needed to set up a standard webpack build. There are lot of other plugins and configuration options worth learning. In the next few sections, we'll add the babel plugin for transpiling our code, and we'll install the React library.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
