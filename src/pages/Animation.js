import React, { Component } from 'react'
import { Link } from 'react-router'

import { Author } from '../components'
import Page from './Page'
import styles from './styles'

export default class Animation extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            React Native provides two animation APIs out of the box: <code>Animated</code> and <code>LayoutAnimation</code>. <code>Animated</code> is used far more frequently, so we'll only cover that here. If you're curious about <code>LayoutAnimation</code>, you can read more in the <a href={'https://facebook.github.io/react-native/docs/animations.html#layoutanimation'}>docs</a>.
          </div>
          <div style={styles.p}>
            <code>Animated</code> is a somewhat imperative API, meaning that you'll manually specify when to start and stop animations. This gives you a lot of control, but can get tedious quickly. Consider using <Link to={'animatable'}>React Native Animatable</Link> React Native Animatable for a component-based declarative API around <code>Animated</code>.
          </div>
          <div style={styles.p}>
            If you're planning on building a rich, interactive UI, you'll also need the <code>PanResponder</code> API for tracking and responding to touch events.
          </div>
        </div>
      </Page>
    )
  }
}
