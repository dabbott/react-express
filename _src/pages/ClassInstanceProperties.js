import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorConsole from "../components/EditorConsole";
import markdownOptions from "../utils/MarkdownOptions";

const code = `class Cat {
  name = 'Tom'
  state = {
    running: true
  }

  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat()
`;

const content = markdown(markdownOptions)`
Class instance properties are a convenient way to declare properties for each instance, equivalent to assigning these properties in the constructor function.

${(
  <EditorConsole code={code} title={"Class instance properties"} height={400} />
)}

Note that this language feature is currently in the proposal stage (not officially adopted as part of the language yet). It's a "stage 2" proposal, meaning it's unlikely to change. Read more about this [here](https://github.com/tc39/proposal-class-fields).
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
