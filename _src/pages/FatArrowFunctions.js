import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const foo = () => 'bar'

const baz = (x) => {
  return x + 1
}

const squareSum = (...args) => {
  const squared = args.map(x => Math.pow(x, 2))
  return squared.reduce((prev, curr) => prev + curr)
}

this.items.map(x => this.doSomethingWith(x))`;

const content = markdown(markdownOptions)`
The **fat arrow** \`=>\` is used to define anonymous functions. There are two important differences in the behavior of these functions, compared to functions defined with \`function\`.

First, the binding for the keyword \`this\` is the same outside and inside the fat arrow function. This is different than functions declared with \`function\`, which can bind \`this\` to another object upon invocation. Maintaining the \`this\` binding is very convenient for operations like mapping: \`this.items.map(x => this.doSomethingWith(x))\`.

Second, fat arrow functions don't have an \`arguments\` object defined. You can achieve the same thing using the **spread syntax**: \`(...args) => doSomething(args[0], args[1])\`.

The fat arrow function syntax can vary a bit. If the function takes exactly one parameter, the parentheses can be omitted: \`x => Math.pow(x, 2)\`. Any other number of arguments will need parentheses: \`(x, y) => Math.pow(x, y)\`. If the function body is not wrapped in curly braces (as in the previous sentences), it is executed as an **expression**, and the return value of the function is the value of the expression. The function body can be wrapped in curly braces to make it a **block**, in which case you will need to explicitly \`return\` a value, if you want something returned. You will likely use the curly braces and block version more frequently, as this allows the function body to include multiple lines of code.

${<EditorTranspiler code={code} title={"Fat arrow functions"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
