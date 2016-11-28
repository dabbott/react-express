import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const taskRunner = async () => {
  try {
    const firstValue = await asyncTask1()
    const secondValue = await asyncTast2(firstValue)
  } catch(e) {
    console.error("Something went wrong! Caught exception:", e)
  }
}`

export default class ObjectSpread extends Component {
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
            ES7 gives us <code>async</code> functions that can use the <code>await</code> keyword to simplify asynchronous logic and readability. If a function is declared <code>async</code>, <code>await</code> will block code execution until the asynchronous operation is completed or fails.
          </div>
          <div style={styles.p}>
            This syntax also makes it easy to catch exceptions by surrounding <code>await</code> with a <code>try</code>/<code>catch</code> block.
          </div>
          <EditorTranspiler
            code={code}
            title={'Async and await'}
          />
        </div>
      </Page>
    )
  }
}
