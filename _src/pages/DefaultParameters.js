import React from "react";
import markdown from "markdown-in-js";

import { PageHeader } from "../components";
import EditorConsole from "../components/EditorConsole";
import Page from "./Page";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const printInput = (input = 'hello world') => {
  console.log(input)
}

printInput()
printInput('hello universe')`;

const content = markdown(markdownOptions)`
We can assign default values to function parameters within the function declaration. A default value is assigned to a parameter if it is \`undefined\`.

${<EditorConsole code={code} title={"Default parameters"} />}
`;

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={"http://gabegsell.com/"}
    />
    {content}
  </Page>;
