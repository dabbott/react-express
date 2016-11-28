import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const foo = () => 'bar'

const baz = (x) => {
  return x + 1
}

const squareSum = (...args) => {
  const squared = args.map(x => Math.pow(x, 2))
  return squared.reduce((prev, curr) => prev + curr)
}

this.items.map(x => this.doSomethingWith(x))`

export default class FatArrowFunctions extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>{this.props.title}</div>
          <div style={styles.p}>
            The <b>fat arrow</b> <code>{'=>'}</code> is used to define anonymous functions. There are two important differences in the behavior of these functions, compared to functions defined with <code>function</code>.
          </div>
          <div style={styles.p}>
            First, the binding for the keyword <code>this</code> is the same outside and inside the fat arrow function. This is different than functions declared with <code>function</code>, which can bind <code>this</code> to another other object upon invocation. Maintaining the <code>this</code> binding is very convenient for operations like mapping: <code>{'this.items.map(x => this.doSomethingWith(x))'}</code>.
          </div>
          <div style={styles.p}>
            Second, fat arrow functions don't have an <code>arguments</code> object defined. You can achieve the same thing using the <b>spread syntax</b>: <code>{'(...args) => doSomething(args[0], args[1])'}</code>.
          </div>
          <div style={styles.p}>
            The fat arrow function syntax can vary a bit. If the function takes exactly one parameter, the parentheses can be omitted: <code>{'x => Math.pow(x, 2)'}</code>. Any other number of arguments will need parentheses: <code>{'(x, y) => Math.pow(x, y)'}</code>. If the function body is not wrapped in curly braces (as in the previous sentences), it is executed as an <b>expression</b>, and the return value of the function is the value of the expression. The function body can be wrapped in curly braces to make it a <b>block</b>, in which case you will need to explicitly <code>return</code> a value, if you want something returned. You will likely use the curly braces and block version more frequently, as this allows the function body to include multiple lines of code.
          </div>
          <EditorTranspiler
            code={code}
            title={'Fat arrow functions'}
          />
        </div>
      </Page>
    )
  }
}
