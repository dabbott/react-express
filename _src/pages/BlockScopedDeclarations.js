import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`;

const content = markdown(markdownOptions)`
Instead of using \`var\` to declare local variables, we use \`const\` and \`let\`. The main difference is that \`var\` is scoped to a function, while \`const\` and \`let\` are scoped to a block.

Additionally, variables declared with \`const\` can only be assigned a value once. Assigning another value to the same name will throw a compiler error. Note that if the value assigned to a \`const\` variable is an object or array, the object or array may still be modified. In other words, it's only the variable name that is bound permanently -- the value itself is still mutable.

${<EditorTranspiler code={code} title={"Using const and let"} />}

You'll notice that the compiled output replaces \`const\` and \`let\` with \`var\`. You'll also notice that Babel transforms \`const a = 3\` into \`var _a = 3\`. This is so that your code can run on older platforms that don't support the new block-scoped variable declarations. When using Babel, it's actually the Babel compiler that enforces proper usage and block-scoping, rather than the runtime JavaScript engine.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
