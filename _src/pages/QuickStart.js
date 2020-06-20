import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Let's set up a new app with the \`create-react-app\` command-line utility from Facebook. This assumes you have \`npm\` installed already; if you don't, skip to the [next section](npm) and come back!


## Installation

To install \`create-react-app\` with \`npm\`, run:

\`\`\`
npm install -g create-react-app
\`\`\`

## Create an app

To initialize a new app, run:

\`\`\`
create-react-app my-app
cd my-app/
npm start
\`\`\`

and then navigate to \`http://localhost:3000/\` in your browser.

## That's it!

You're all set up with a new React app. If you need it, you can find the full guide for getting started with \`create-react-app\` [here](https://github.com/facebookincubator/create-react-app#getting-started).
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
