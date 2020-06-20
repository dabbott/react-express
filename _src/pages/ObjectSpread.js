import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `const defaultStyle = {
  color: 'black',
  fontSize: 12,
  fontWeight: 'normal'
}

const style = {
  ...defaultStyle,
  fontWeight: 'bold',
  backgroundColor: 'white'
}

// Note that fontWeight is 'bold', as the second
// assignment overrode the initial assignment.
console.log(style)`;

const content = markdown(markdownOptions)`
Similar to the array spread operator in ES2015, ES2016 offers a spread operator \`...\` for objects. This tries to use ES2015's \`Object.assign\`, as you'll see when you view the babel output of the spread operator. This can be very useful in copying or extending objects.

We can copy an object simply with \`${"{...originalObj}"}\`. Note that this is a shallow copy. We can also extend an object with \`${"{...originalObj, key1: 'newValue'}"}\`. Similarly to \`assign\`, when duplicate keys appear in a spread, the last assignment of that key takes priority.

${<EditorConsole code={code} title={"Object spread operator"} />}

Note that this language feature is currently in the proposal stage (not officially adopted as part of the language yet). It's a "stage 3" proposal, meaning it's very unlikely to change. Read more about this [here](https://github.com/tc39/proposal-object-rest-spread).
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
