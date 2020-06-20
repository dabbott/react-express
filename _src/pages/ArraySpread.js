import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `const foo = ['a', 'b', 'c']
const bar = ['d', 'e', 'f']

console.log(...foo)
console.log([...foo, ...bar])
`;

const content = markdown(markdownOptions)`
The array spread syntax \`...\` makes it easy to expand an array. This can be used to make a shallow copy of an array. It also provides a succinct way to concatenate and unshift arrays.

${<EditorConsole code={code} title={"Array spread"} />}
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
