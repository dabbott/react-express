import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const domComponents = `import React from 'react'
import { render } from 'react-dom'

const node = document.querySelector('#app')
const element = (
  <div>
    <input type={'text'} defaultValue={'Type here!'} />
    <select>
      <option>A</option>
      <option>B</option>
    </select>
    <img src={'//unsplash.it/200/300'} />
  </div>
)

render(element, node)
`;

const customComponents = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  render() {
    const style = {
      margin: 20,
      padding: 20,
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

const node = document.querySelector('#app')
const element = (
  <div>
    <Card color={'skyblue'}>Card 1</Card>
    <Card color={'steelblue'}>Card 2</Card>
  </div>
)

render(element, node)
`;

const content = markdown(markdownOptions)`
\`Components\` are the building blocks of any React UI. React manages the mapping from components created with JSX (e.g. \`${`<div />`}\`) to the native browser DOM which is actually rendered.

The entire UI of the application is specified by declaring which components to render, and in what order. Components are nested inside other components, forming a tree data structure. The top level component, or the root of the tree, is known as the root component. Nested components are called children components.

# DOM Components

ReactDOM provides us built-in DOM-node components that look just like their corresponding HTML tags, e.g. \`${`<div />`}\`, \`${`<input />`}\`. These generally accept the same attributes as their HTML counterparts, like \`title\` and \`style\`.

A few key differences to keep in mind:
- Since \`class\` is a reserved word in JavaScript, we use \`className\` instead.
- Styling elements with \`style\` is quite common in idiomatic React code, unlike in plain HTML. The \`style\` attribute takes an object which uses the JavaScript names of CSS rules. For example, we would write \`${`style={{paddingTop: 20}}`}\` in React, to achieve the same thing as \`style="padding-top: 20px;"\` in plain HTML. We'll cover styling in greater depth later.

Here are a few examples of DOM components rendered using React.

${<WebPlayer code={domComponents} />}

# Custom Components

Often we want to render more complex components which encapsulate logic, styles, and multiple DOM components.

To declare a custom component, we extend \`React.Component\` and write a \`render\` method which returns other components. We can then instantiate our component just as we would a DOM component. By convention, custom component names are capitalized (to distinguish them from DOM components, which are lowercase).

${<WebPlayer code={customComponents} />}

Notice how the Card component encapsulates multiple DOM components and styles, while also supporting custom parameters - we can pass a custom color and children components (these are accessed within the component from \`this.props\`). Custom components let us reuse code extremely easily.

Ultimately, our \`Card\` component doesn't actually insert an HTML element called \`<Card />\` in the DOM. Custom components are just an abstract representation that React keeps track of, making it easier for us to write complex apps. Only built-in DOM components are actually inserted as elements in the DOM.

<br />

In the next sections, we'll cover two important aspects of using components, the <b>Component API</b> and the <b>Component Lifecycle API</b>.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
