import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`

export default class BlockScopedVariables extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>{this.props.title}: <code>const</code> and <code>let</code></div>
          <div style={styles.p}>
            Instead of using <code>var</code> to declare local variables, we use <code>const</code> and <code>let</code>. The main difference is that <code>var</code> is scoped to a function, while <code>const</code> and <code>let</code> are scoped to a block.
          </div>
          <div style={styles.p}>
            Additionally, variables declared with <code>const</code> can only be assigned a value once. Assigning another value to the same name will throw a compiler error. Note that if the value assigned to a <code>const</code> variable is an object or array, the object or array may still be modified. In other words, it's only the variable name that is bound permanently -- the value itself is still mutable.
          </div>
          <EditorTranspiler
            code={code}
            title={'Using const and let'}
          />
          <div style={styles.p}>
            You'll notice that the compiled output replaces <code>const</code> and <code>let</code> with <code>var</code>. You'll also notice that Babel transforms <code>const a = 3</code> into <code>var _a = 3</code>. This is so that your code can run on older platforms that don't support the new block-scoped variable declarations. It's the Babel compiler that enforces proper usage and block-scoping, rather than the runtime JavaScript engine.
          </div>
        </div>
      </Page>
    )
  }
}
