import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { EditorConsole } from "../components";

const code = `const fetchData = async () => {
  return fetch('https://randomuser.me/api/')
}

const printData = async () => {
  try {
    const data = await fetchData()
    const json = await data.json()
    console.log(json)
  } catch(e) {
    console.error("Problem", e)
  }
}

printData()`;

const content = markdown(markdownOptions)`
We can use the \`async\` keyword before a function name to wrap the return value of this function in a \`Promise\`. We can use the \`await\` keyword (in an \`async\` function) to wait for a promise to be resolved or rejected before continuing code execution in this block.

This syntax also propagates exceptions that occur in promises using a \`try\`/\`catch\` block, just as if the code were running synchronously.

${<EditorConsole code={code} title={"Async and await"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
