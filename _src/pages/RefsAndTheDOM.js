import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const measureNode = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  state = {
    width: null,
    height: null,
  }

  saveRef = (ref) => this.containerNode = ref

  measure() {
    const {clientWidth, clientHeight} = this.containerNode

    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }

  componentDidMount() {
    this.measure()
  }

  componentDidUpdate() {
    this.measure()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.width !== nextState.width ||
      this.state.height !== nextState.height
    )
  }

  render() {
    const {width, height} = this.state

    return (
      <div
        style={styles.card}
        ref={this.saveRef}
      >
        <h2 style={styles.subtitle}>My dimensions are:</h2>
        {width && height && (
          <h1 style={styles.title}>{width} x {height}</h1>
        )}
      </div>
    )
  }
}

const styles = {
  card: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
  },
}

render(<Card />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
Sometimes when working with React, you will need direct access to the underlying DOM nodes that you render. You might want to measure a node or get the scroll position. Or maybe you need to interoperate with a non-React library that modifies the DOM directly. React provides an escape hatch called \`refs\` for this.

# Refs

React components have a special \`ref\` prop. You can pass a callback function as the \`ref\`, which will get called with the component instance after the initial render. You can save the reference for use within React lifecycle methods. The instance will either be a custom component or a DOM node. In either case, you can call methods on this instance. Let's try using a ref to measure a DOM node.

${<WebPlayer code={measureNode} />}

There are quite a few things going on here, so let's look at them one at a time.

## The **\`ref\`** prop

Here we should pass a callback function that can save the reference to the instance. Most likely, we want to assign the reference to our component, so we need to make sure this function is bound to the current component (we want \`this\` to be our component). We should give the reference a descriptive name (in this case, \`containerNode\`).

## Lifecycle hooks

We want to measure our rendered node after both the initial render and subsequent renders. To do this, we will measure the node in both \`componentDidMount\` and \`componentDidUpdate\`.

## Measuring

We now have a reference to a DOM node, so we can get its width and height. We want to store these and use them in our render function. The easiest place to store these is in the component's \`state\`, so we'll use \`setState\`. This triggers a second render. Now we can grab the dimensions from \`state\` and display them.

However, after our second render, the content will be different, so the node will need to be measured again. This means \`componentDidUpdate\` is called, which calls \`measure\`, which calls \`setState\` again, thus causing an infinite loop.

## Preventing infinite loops with **\`shouldComponentUpdate\`**

We can prevent the infinite loop by telling our component to only render if \`width\` or \`height\` has *changed*.

Here's what'll happen now: after the first renderer, we'll store an initial \`width\` and \`height\` with \`setState\`. This will trigger a second render to display the \`width\` and \`height\`, which will change the \`width\` and \`height\`, causing a third render. The third render will display the latest \`width\` and \`height\`, and hopefully this won't change the dimensions yet again. If it does, we can still run into an infinite loop.

Ultimately, we have to deal with this sort of thing on a case-by-case basis-since there's no perfect solution. It's also important to note that if the render takes long enough, the user may see the initial unmeasured version of the component.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
