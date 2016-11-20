import React, { Component } from 'react'
import Page from './Page'
import styles from './styles'

export default class Loading extends Component {
  render() {
    return (
      <Page title={''}>
        <div style={styles.well}>

        </div>
      </Page>
    )
  }
}
