import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const importExample = `// import the default export
import React from 'react'

// import other named exports
import { Component, Children } from 'react'

// import default and others simultaneously
// import React, { Component, Children } from 'react'`;

const exportExample = `export default React
export { Component, Children }`;

const content = markdown(markdownOptions)`
ES2015 provides a more advanced module importing/exporting pattern than the widely used CommonJS pattern. By contrast to the old \`${"module.exports = {...}"}\`, we can now export multiple named values. Similarly, we can import multiple named values.

There is one default export per file, and this exported value can be imported without refering to it by name. Every other import and export must be named.

If you attempt to import an older CommonJS module using the new import syntax, Babel will handle the difference in format automatically at runtime. An old-style module won't have the special \`__esModule\` property added by Babel upon export.

${<EditorTranspiler code={importExample} title={"Importing"} />}

The imports in the previous example would be available if exported from the module \`react\` as in the next example.

${<EditorTranspiler code={exportExample} title={"Exporting"} />}

For full details on the importing/exporting syntax, see the MDN reference for [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
