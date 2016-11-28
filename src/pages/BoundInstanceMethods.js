import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}`

export default class BoundInstanceMethods extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'http://gabegsell.com/'}>
              Gabe G'Sell
            </Author>
          </div>
          <div style={styles.p}>
            You've probably seen javascript functions bound to certain contexts with the <code>bind()</code> function. Binding is often used to ensure that a class's instance function is invoked with the correct context.
          </div>
          <div style={styles.p}>
            ES7 gives us a shorthand syntax to bind class instance functions to the context at the time they are defined. The <code>printName</code> function below is bound to current context at the time the class instance is created.
          </div>
          <EditorTranspiler
            code={code}
            title={'Bound instance methods'}
          />
        </div>
      </Page>
    )
  }
}
