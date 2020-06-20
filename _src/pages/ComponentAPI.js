import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const code = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <div style={{color, fontSize: size}}>
        {count}
      </div>
    )
  }
}

class App extends Component {
  render() {
    const style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <div style={style}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
## **\`this.props\`**

\`Components\` can be configured upon instantiation by passing properties to the \`constructor\` - these properties are called \`props\`. \`props\` may be accessed from within the component's methods as \`this.props\`, in order to alter how the component is rendered and/or how it behaves. However, \`props\` must <b>not be altered</b> from within the component's methods.

A parent element may alter a child element's \`props\` at any time. The child element will generally re-render itself to reflect its new configuration parameters. A child component may decide not to re-render itself even though its configuration has changed, as determined by \`shouldComponentUpdate()\` (more on this in the Component Lifecycle API section).

You may set default values for \`props\` by assigning an object to the static class property \`defaultProps\`, where the keys are the prop names and the values are the default prop values.

You may also define the types of \`props\` that a component expects by assigning an object to the static class property \`propTypes\`, where the keys are the prop names and the values are prop types, from the \`prop-types\` \`npm\` module (formerly \`React.PropTypes\`). We won't be using \`PropTypes\` in our examples, but they're very useful once you start working with larger and more complex codebases.

## **\`this.state\`**

\`Components\` may maintain their state internally within the object \`state\`. \`this.state\` may be accessed from within component methods. Unlike \`props\`, parent elements may not access a child's \`state\`, as it is intended to manage the child's internal state rather than external configuration.

Note that you should <i>never</i> directly assign to a specific key within the \`state\` object, e.g. \`this.state.foo = 'bar'\`, but instead use the method \`this.setState()\`.

## **\`this.setState(object newState)\`**

\`Components\` may update their \`state\` by passing an object to the method \`this.setState()\`. Any keys in the object passed to the method will be merged into (and override any existing keys in) \`this.state\`.

# Example

The following example includes a \`Counter\` component that maintains the elapsed time internally as \`state.count\`. The \`App\` component renders the \`Counter\` component with two \`props\`: \`size\` and \`color\`. The \`App\` can easily render several \`Counter\` components with different sizes and colors.

${<WebPlayer code={code} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
