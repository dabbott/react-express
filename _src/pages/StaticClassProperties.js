import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `class Foo {
  static bar = 'hello'
}

console.log(Foo.bar)`;

const content = markdown(markdownOptions)`
As we saw in our ES2015 section, static functions on classes exist as a part of ES2015. In ES2016, we can use the \`static\` keyword to declare static properties as well. Static properties exist directly on the class.

${<EditorConsole code={code} title={"Static properties"} />}
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
