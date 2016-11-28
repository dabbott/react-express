import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'

export default class Exercises extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Exercises</div>
          <div style={styles.p}>
            Let's apply these concepts to some exercises.
          </div>
        </div>
      </Page>
    )
  }
}
