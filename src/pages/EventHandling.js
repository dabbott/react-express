import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const inlineFunction = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state

    return (
      <div onClick={() => this.setState({count: count + 1})}>
        Click HERE to increment: {count}
      </div>
    )
  }
}

render(<Button />, document.querySelector('#app'))
`

const boundFunction = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {

  state = {count: 0}

  handleClick = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <div onClick={this.handleClick}>
        Click HERE to increment: {count}
      </div>
    )
  }
}

render(<Button />, document.querySelector('#app'))
`

const customComponents = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {
  render() {
    const {onPress, children} = this.props

    return (
      <div onClick={onPress}>
        {children}
      </div>
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
      <Button
        count={count}
        onPress={this.handlePress}
      >
        Click HERE to increment: {count}
      </Button>
    )
  }
}

render(<App />, document.querySelector('#app'))
`

const content = markdown(markdownOptions)`
DOM nodes created with React, such as \`${`<div />`}\`, fire the same events they would in vanilla JavaScript, with few differences.

To attach a callback to an event, pass a function as an attribute to a React element, e.g. \`${`<div onClick={(e) => console.log(e)} />`}\`

## Naming scheme

Events are camel-cased, so you'll need to make sure to use \`onClick\` as an attribute on your React elements instead of their native equivalent, \`onclick\`. Further, React normalizes these names across browsers, so you don't need to consider browser inconsistencies.

You can find the full list of events supported by React [here](https://facebook.github.io/react/docs/events.html#supported-events).

## Event normalization

React normalizes event objects created by the browser. More detail on this [here](https://facebook.github.io/react/docs/events.html#overview) in the React docs, but this gist is: React events have the same interface as native events, so you can still call \`e.stopPropagation()\` or \`e.preventDefault()\`, and you can still access properties like \`e.which()\`.

## Example

Let's look at an example where we handle the \`onClick\` event of an element.

<WebPlayer code=${inlineFunction} />

## Performance & Binding

It's generally bad practice to define functions within the props of your React elements like we did in the previous example. This is because a new function will be created each time \`render\` is called - it's common for components to compare props using \`===\`, which in this case will indicate that the \`onClick\` prop of the \`div\` has changed, and may cause unnecessary re-renders. Using \`.bind\` has a similar effect.

We call functions defined like this **inline functions**. They're convenient to use as you're developing a component, but should generally be changed to class properties (bound to the instance).

## Better Example

<WebPlayer code=${boundFunction} />

Notice how we define the \`handleClick\` function once, and reference it in the \`render\`. This is more ideomatic because it performs better than our previous example with the function defined inline.

# Custom Components and Events

Let's say we want to make a custom \`Button\` component with an \`onClick\` event. Creating a button with \`${`<Button onClick={() => ...} />`}\` will tell React to instantiate our \`Button\` class with the function prop \`onClick\`. However, this alone won't make our \`Button\` respond to clicks.

Only DOM components can handle DOM events like \`onClick\` - so our \`Button\` must render a DOM component and pass the \`onClick\` prop into it. Our \`Button\` is essentially a pass-through for the click event.

There is nothing special about the name of the \`onClick\` prop passed to our \`Button\` - we could name it anything we want, so long \`Button\` passes that prop into a DOM component. For example, we could decide to name the event \`onPress\` and create our button \`Button\` as \`${`<Button onPress={() => ...} />`}\`. Within \`Button\`, we would then want to render \`${`<div onClick={this.props.onPress} />`}\`.

<WebPlayer code=${customComponents} />

Here we pass our \`Button\` a prop \`onPress\`, which then gets passed into the \`onClick\` of a \`div\`.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
