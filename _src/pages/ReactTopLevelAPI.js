import React from "react";
import markdown from "markdown-in-js";

import { WebPlayer } from "../components";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const code = `import React from 'react'
import { render } from 'react-dom'

const node = document.querySelector('#app')
const element = <div>Hello World!</div>

render(element, node)
`;

const content = markdown(markdownOptions)`

The React top-level API lets us create React components and render them into the DOM. Let's take a look at how this works.

There are two libraries we'll use:
- \`react\` contains the APIs for creating components
- \`react-dom\` contains the APIs for rendering to the browser DOM

# ReactDOM API

## **\`ReactDOM.render(element, node)\`**

The \`react-dom\` package on \`npm\` lets us render to the DOM. To use it, we first need to import it

${<pre><code>{`import { render } from 'react-dom'`}</code></pre>}

Then we must pick or create a DOM node in our app to render into. We should pick a node without any existing children, or assume that any existing children may be replaced. React can't render into the \`body\` node, but we can pick any node within the \`body\`. If we have a node with \`id="app"\`, for example, we can get a reference to it with

${<pre><code>{`const node = document.querySelector('#app')`}</code></pre>}

Lastly we'll use \`render\`. The method signature is \`render(element, node)\`, where the first argument is a React element (more on this soon) and the second is the DOM node we picked to render into. For now, we'll use a \`div\` as our React element.

Putting this all together, we get

${<WebPlayer code={code} height={250} />}

Note that we generally must \`import React from 'react'\` even though we don't explicitly use it in our code - this is because our JSX \`${`<div />`}\` is transformed behind the scenes to \`React.createElement('div')\`.

# React API

## **\`React.Component\`**

React components are the building blocks of a React app. Components are classes that we instantiate using JSX syntax, e.g. \`${`<MyComponent />`}\`.

ReactDOM provides us built-in DOM-node components that look just like their corresponding HTML tags, e.g. \`${`<div />`}\`, \`${`<input />`}\`. We don't need to require these to use them - that's handled automatically during the JSX language transformation.

We can create custom components by subclassing \`React.Component\`, e.g. \`class MyComponent extends React.Component\`, and overriding the \`render()\` method to return a React Element. This is the most common way to create custom components.

There are two other ways of creating components: **PureComponent** and **Stateless Functional Components**. We won't cover these too in-depth, but they're good to be aware of.

## **\`React.PureComponent\`**

We can extend \`React.PureComponent\`, e.g. \`class MyComponent extends React.PureComponent\`, to inherit an optimized \`shouldComponentUpdate\` method, which will improve the performance of our components. This will become more clear after you read the next section, but what this means is: a \`PureComponent\` will only re-render when the *identity* of its \`props\` change (i.e. each \`prop\` is compared with \`===\`).

## **Stateless Functional Components (SFCs)**

Lastly, although it's not exactly a React API, a component can be a regular function, e.g. \`MyComponent = (props) => ...\`, that returns a React Element. Components defined this way don't have any lifecycle methods and can't have internal \`state\`. This is roughly equivalent to defining a component with \`class MyComponent extends React.Component\` and *only* overriding the \`render\` method, nothing else.

There are a few other less essential React APIs which we won't cover, but you'll want to read up on after you get comfortable building components:
- \`PropTypes\` for type-checking component parameters
- \`Children\` for operating on React component children
- \`cloneElement\` for copying a React Element and modifying only its props and children

Let's take a look at the component API in-depth.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
