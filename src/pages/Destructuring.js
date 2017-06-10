import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

const obj = {a: 'x', b: 'y', c: 'z'}
const {a, b, c} = obj`;

const content = markdown(markdownOptions)`
Destructuring is a convenient way to extract multiple keys from an object or array simultaneously and assign the values to local variables.

${<EditorTranspiler code={code} title={"Destructuring"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
