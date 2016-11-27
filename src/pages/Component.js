import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Components</div>
          <div style={styles.p}>
            <code>Components</code> are the building block of any UI. React Native manages the mapping from JavaScript components to the native UI which is actually rendered.
          </div>
          <div style={styles.p}>
            The entire UI of the application is specified by declaring which components to render, and in what order. Components are nested inside other components, forming a tree data structure. The top level component, or the root of the tree, is known as the root component. Nested components are called children components.
          </div>
          <div style={styles.p}>
            In the next sections, we'll cover the two most important aspects of using components, the <b>Component API</b> and the <b>Component Lifecycle API</b>.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
