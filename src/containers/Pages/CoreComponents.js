import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page
        title={'Component API'}>
        <div style={styles.well}>
          <div style={styles.h3}>Core Components</div>
          <div style={styles.p}>
            React Native includes a few dozen core components which can be used out-of-the-box. More complex components can be built by combining the core components in interesting ways.
          </div>
          <div style={styles.p}>
            Nearly all the core components extend the <code>View</code> component, and can be passed an optional <code>style</code> prop. The style can include visual properties like colors and borders, as well as layout properties. Components use the flexbox algorithm to specify the layout of their children.
          </div>
          <div style={styles.p}>
            Let's take a more in-depth look at the flexbox algorithm and some of the most common core components.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
