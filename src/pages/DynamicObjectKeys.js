import React from "react";
import markdown from "markdown-in-js";

import { PageHeader } from "../components";
import EditorConsole from "../components/EditorConsole";
import Page from "./Page";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const attribute = 'color'
const style = {
  [attribute]: 'white'
}

console.log(style.color)`;

const content = markdown(markdownOptions)`
In ES5, object literal keys are always interpreted as a string. ES2015 allows us to use computed values as keys in object literals, using square bracket syntax: \`[myKey]\`.

${<EditorConsole code={code} title={"Dynamic object keys"} />}
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
