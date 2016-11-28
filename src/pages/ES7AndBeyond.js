import React, { Component } from 'react'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

export default class ES7AndBeyond extends Component {
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
            ES6 is the set of Javascript features as of 2015. There have already been many other features proposed for future versions of Javascript, including ES7 (2016) and ES8. With Babel, we can use many of these features today.
          </div>
          <div style={styles.p}>
            Some of these features have already become standards in modern Javascript development. Let's walk through a few of the more popular and useful features.
          </div>
        </div>
      </Page>
    )
  }
}
