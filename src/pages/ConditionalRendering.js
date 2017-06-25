import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const shortCircuitAnd = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  render() {
    const {title, subtitle} = this.props

    return (
      <div style={styles.card}>
        <h1 style={styles.title}>{title}</h1>
        {subtitle && (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        )}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card title={'Title'} />
        <Card title={'Title'} subtitle={'Subtitle'} />
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

render(<App />, document.querySelector('#app'))
`;

const ternaryEvaluation = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  render() {
    const {title, subtitle} = this.props

    return (
      <div style={styles.card}>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card title={'Title'} />
        <Card title={'Title'} subtitle={'Subtitle'} />
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
  empty: {
    fontSize: 12,
    lineHeight: '15px',
    opacity: 0.5,
  }
}

render(<App />, document.querySelector('#app'))
`;

const complexRendering = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  renderContent() {
    const {title, subtitle} = this.props

    return (
      <div>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }

  render() {
    const {loading, error} = this.props

    let content

    if (error) {
      content = 'Error'
    } else if (loading) {
      content = (
        <h3 style={styles.empty}>Loading...</h3>
      )
    } else {
      content = this.renderContent()
    }

    return (
      <div style={styles.card}>
        {content}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card loading={true} />
        <Card error={true} />
        <Card title={'Title'} subtitle={'Subtitle'} />
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
  empty: {
    fontSize: 12,
    lineHeight: '15px',
    opacity: 0.5,
  }
}

render(<App />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
It's common for a component to render different kinds of content based on its \`props\`. React is extremely flexible - you may return entirely different content each time the render function is called. The only requirement is that the render function returns a React node - this can be a React Element, a string, null, or an array of any of these.

# Rendering with \`&&\`

Let's look at one of the most common cases: conditionally rendering a React element based on whether a specific \`prop\` exists or not.

In this example, we'll render a Card component that takes a \`title\` prop and optionally a \`subtitle\` prop. We only want to render a \`h2\` for the subtitle if it exists.

${<WebPlayer code={shortCircuitAnd} />}

For simple conditional rendering, we take advantage of the short-circuit evaluation of \`&&\`. If the left-hand side of the \`&&\` is falsy, the expression evaluates to the left hand side. Otherwise, the expression evaluates to the right-hand side.

In the example, when \`subtitle\` is not passed in, the prop is \`undefined\`, so the expression evaluates to the left-hand side (\`undefined\`). When React sees an \`undefined\` value, nothing will be rendered.  When we do pass a \`subtitle\` prop, the left-hand side is truthy,  so the expression evaluates to the right-hand side-in this case, our \`h2\` component.

Note that an empty string \`""\` is falsy, but the expression will still evaluate to a string (not the boolean \`false\`). If the parent component renders empty string children, this can affect rendering. So you may want to doubly negate the prop (i.e. convert to boolean) with \`(!!subtitle && ...)\` if you need the value \`false\`..

You may also notice that the styles are defined below where they are used in the component \`render\` functions. This pattern is fairly common. Styles are often secondary to the component logic, so we want our logic to come first in the file. This technique works because the \`styles\` variable declaration is hoisted to the top of the file, and we assign a value to \`styles\` before the render functions are ever called.

# Rendering with ternary \`?\`

Let's look at another common case: rendering a different React element for when a \`prop\` exists and when it doesn't. We can accomplish this easily with the ternary operator. It's common to render defaults this way.

${<WebPlayer code={ternaryEvaluation} />}

# Rendering with \`if/else\`

For more complex cases, we can introduce variables to temporarily reference React elements, letting us combine them in different ways. We may also use class methods for rendering different content.

Let's take a look at an example where the rendering is substantially different based on whether or not the \`loading\` and \`error\` props exists.

${<WebPlayer code={complexRendering} />}

Rendering in React is powerful because the logic can be as simple or complex as we need it to be. However, as rendering complexity grows, the code can start to become unmanageable. Consider breaking down complex components into smaller, simpler ones for a more maintainable code base.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
