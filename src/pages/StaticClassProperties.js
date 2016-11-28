import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `class Cat {
  static legCount = 4
}
console.log(Cat.legCount) // 4`

export default class StaticClassProperties extends Component {
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
            As we saw in our ES6 section, static functions on classes exist as a part of ES6. In ES7, we can use the <code>static</code> keyword to declare static properties as well.
          </div>
          <EditorTranspiler
            code={code}
            title={'Static properties'}
          />
        </div>
      </Page>
    )
  }
}
