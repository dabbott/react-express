import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const classExample = `class Calculator {
  constructor(value1, value2) {
    this.value1 = value1
    this.value2 = value2
  }

  static multiply(value1, value2) {
    return value1 * value2
  }

  sum() {
    return this.value1 + this.value2
  }
}

const calc = new Calculator(2, 3)

console.log(calc.sum())
console.log(Calculator.multiply(2, 3))`;

const classExtendsExample = `
class SquareCalculator {
  constructor(value) {
    this.value = value
  }

  calculate() {
    return this.value * this.value
  }
}

class CubeCalculator extends SquareCalculator {
  calculate() {
    return this.value * super.calculate()
  }
}

const cuber = new CubeCalculator(3)
console.log(cuber.calculate())
`;

const content = markdown(markdownOptions)`
In ES5, classes are written as functions, with instance methods assigned to \`MyFunction.prototype\`. ES2015 allows us to use the simpler \`class\` syntax.

\`class\` gives us built in instance functions, static functions, and inheritance. \`constructor\` is a special function that is called automatically every time a class instance is created. We can use the \`static\` keyword to declare static class functions. Static method calls are made directly on the class and cannot be called on instances of the class.

<EditorConsole
  code=${classExample}
  title=${"Using class"}
/>

# Inheritance

\`class\` gives us simple inheritance with the keyword \`extends\`. Classes that inherit from a parent have access to respective parent functions via \`super\`.

${<EditorConsole code={classExtendsExample} title={"Inheritance"} />}

For full details on the \`class\` syntax, see the [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes').
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
