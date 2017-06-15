import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { EditorTranspiler } from "../components";

const code = `const a = <div />

const b = (
  <div
    foo='hello'
    bar={baz}>
    <span>42</span>
  </div>
)`;

const content = markdown(markdownOptions)`
JSX is an extension to JavaScript that adds a new kind of <b>expression</b>. You can use JSX expressions anywhere you could use any other expression.

JSX is a shortcut for using the \`React.createElement()\` API, that is much more concise, easy to read, and visually looks a little like the generated UI (as both are tree-like). You don't <i>have to</i> use JSX, but there are practically no disadvantages, so you probably should use it.

JSX is tag-based like XML. Each tag, like \`${"<div />"}\`, is transformed into a call to \`React.createElement()\`. Any attributes become \`props\` of the instantiated component. Attributes can be strings like \`foo='hello'\`, or they can be interpolated JavaScript expressions when wrapped in curly braces as in \`${"bar={baz}"}\` (which would set the \`bar\` \`prop\` to the variable baz).

Tags can be self-closing, like \`${"<div />"}\`, or they can include both an opening and closing tag, like \`${"<div></div>"}\`. To include children elements, you will need to use an opening and closing tag and put the children tags within.

${<EditorTranspiler code={code} title={"JSX"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
