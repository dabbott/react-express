import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const inlineFunction = `import React, { Component } from 'react'
import { render } from 'react-dom'

class CounterButton extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state

    return (
      <button type='button' onClick={() => this.setState({count: count + 1})}>
        Click HERE to increment: {count}
      </button>
    )
  }
}

render(<CounterButton />, document.querySelector('#app'))
`;

const boundFunction = `import React, { Component } from 'react'
import { render } from 'react-dom'

class CounterButton extends Component {

  state = {count: 0}

  handleClick = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <button type='button' onClick={this.handleClick}>
        Click HERE to increment: {count}
      </button>
    )
  }
}

render(<CounterButton />, document.querySelector('#app'))
`;

const customComponents = `import React, { Component } from 'react'
import { render } from 'react-dom'

class CounterButton extends Component {
  render() {
    const {onPress, children} = this.props

    return (
      <button type='button' onClick={onPress}>
        {children}
      </button>
    )
  }
}

class App extends Component {

  state = {count: 0}

  handlePress = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <CounterButton
        count={count}
        onPress={this.handlePress}
      >
        Click HERE to increment: {count}
      </CounterButton>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
DOM nodes created with React, such as \`${`<button />`}\`, fire the same events they would in vanilla JavaScript, with a few differences.

To attach a callback to an event, pass a function as an attribute to a React element, e.g. \`${`<button onClick={(e) => console.log(e)} />`}\`

## Naming scheme

Events are camel-cased, so you'll need to make sure to use \`onClick\` as an attribute on your React elements instead of their native equivalent, \`onclick\`. Further, React normalizes these names across browsers, so you don't need to consider browser inconsistencies.

You can find the full list of events supported by React [here](https://facebook.github.io/react/docs/events.html#supported-events).

## Event normalization

In addition to normalizing event names, React normalizes event objects created by the browser. React events have the same interface as native events, so you can still call \`e.stopPropagation()\` or \`e.preventDefault()\`, and you can still access properties like \`e.which()\`. More detail on this [here](https://facebook.github.io/react/docs/events.html#overview) in the React docs.

## Example

Let's look at an example where we handle the \`onClick\` event of an element.

${<WebPlayer code={inlineFunction} />}

## Performance & Binding

It's generally bad practice to define functions within the props of your React elements like we did in the previous example. This is because a new function will be created each time \`render\` is called - it's common for components to compare props using \`===\`, which in this case will indicate that the \`onClick\` prop of the \`button\` has changed, and may cause unnecessary re-renders. Using \`.bind\` within component props has a similar effect.

We call functions defined like this **inline functions**. They're convenient to use as you're developing a component, but should generally be extracted and bound to the instance of the class.

There are two ways to bind a method to the instance. The first is to write \`this.handleClick = this.handleClick.bind(this)\` in the \`constructor\`. However, if you are using babel with at least stage 2 preset, you can bind the function by declaring it as a class property with a fat arrow. This is convenient, and you'll see an example below (and throughout the other examples).

It's also important to note that if \`handleClick\` isn't bound to the class instance, it won't be able to access \`this.setState\` because \`this\` will be \`undefined\`. This is another important reason to bind event handling functions.

## Better Example

${<WebPlayer code={boundFunction} />}

Notice how we define the \`handleClick\` function once, and reference it in the \`render\`. This is more idiomatic because it performs better than our previous example with the function defined inline.

# Custom Components and Events

Let's say we want to make a custom \`CounterButton\` component with an \`onClick\` event. Creating a button with \`${`<CounterButton onClick={() => ...} />`}\` will tell React to instantiate our \`CounterButton\` class with the function prop \`onClick\`. However, this alone won't make our \`CounterButton\` respond to clicks.

Only DOM components can handle DOM events like \`onClick\` - so our \`CounterButton\` must render a DOM component and pass the \`onClick\` prop into it. Our \`CounterButton\` is essentially a pass-through for the click event.

There is nothing special about the name of the \`onClick\` prop passed to our \`CounterButton\` - we could name it anything we want, so long as \`CounterButton\` passes that prop into a DOM component. For example, we could decide to name the event \`onPress\` and create our button \`CounterButton\` as \`${`<CounterButton onPress={() => ...} />`}\`. Within \`CounterButton\`, we would then want to render \`${`<button onClick={this.props.onPress} />`}\`.

${<WebPlayer code={customComponents} />}

Here we pass our \`CounterButton\` a prop \`onPress\`, which then gets passed into the \`onClick\` of a \`button\`.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
