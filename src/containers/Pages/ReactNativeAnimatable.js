import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'

import * as Animatable from 'react-native-animatable'

export default class App extends Component {

  state = {animation: 'fadeIn'}

  toggleAnimation = () => {
    const {animation} = this.state
    const next = animation === 'fadeIn' ? 'fadeOut' : 'fadeIn'

    this.setState({animation: next})
  }

  renderItem = (delay, i) => {
    const {animation} = this.state

    return (
      <Animatable.View
        key={i}
        animation={animation}
        delay={delay}
        style={styles.button}
      >
        <Text style={styles.text}>{i}</Text>
      </Animatable.View>
    )
  }

  render() {
    const {animation} = this.state
    const delays = [0, 100, 250, 450, 650]

    return (
      <TouchableOpacity
        // use key to force a re-render when we switch animations
        key={animation}
        onPress={this.toggleAnimation}
      >
        {delays.map(this.renderItem)}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const vendorComponents = [
  ['react-native-animatable', 'https://cdn.rawgit.com/dabbott/8335f232c8c90ef056ac5912e6cd4b38/raw/88841a962dc104b02b9e9919c5ad7a46c6c382d9/react-native-animatable.js'],
]

export default class View extends Component {
  render() {
    return (
      <Page title={'React Native Animatable'}>
        <div style={styles.well}>
          <div style={styles.h3}>React Native Animatable</div>
          <div style={styles.p}>
            A library for declarative animations! See the Github repo <a href={'https://github.com/oblador/react-native-animatable'}>here</a>.
          </div>
          <div style={styles.p}>
            Place the props below on any component wrapped as an <code>Animatable</code>.
          </div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong><code>animation</code></strong></td>
                <td><em>None</em></td>
                <td>Name of the animation, see below for available animations.</td>
              </tr>
              <tr>
                <td><strong><code>duration</code></strong></td>
                <td><code>1000</code></td>
                <td>For how long the animation will run (milliseconds).</td>
              </tr>
              <tr>
                <td><strong><code>delay</code></strong></td>
                <td><code>0</code></td>
                <td>Optionally delay animation (milliseconds).</td>
              </tr>
              <tr>
                <td><strong><code>direction</code></strong></td>
                <td><code>normal</code></td>
                <td>Direction of animation, especially useful for repeating animations. Valid values: <code>normal</code>, <code>reverse</code>, <code>alternate</code>, <code>alternate-reverse</code>.</td>
              </tr>
              <tr>
                <td><strong><code>easing</code></strong></td>
                <td><code>ease-in-out</code></td>
                <td>Timing function for the animation. Valid values: <code>linear</code>, <code>ease</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>.</td>
              </tr>
              <tr>
                <td><strong><code>iterationCount</code></strong></td>
                <td><code>1</code></td>
                <td>How many times to run the animation, use <code>infinite</code> for looped animations.</td>
              </tr>
              <tr>
                <td><strong><code>transition</code></strong></td>
                <td><em>None</em></td>
                <td>What <code>style</code> property to transition, for example <code>opacity</code>, <code>rotate</code> or <code>fontSize</code>. Use array for multiple properties.</td>
              </tr>
              <tr>
                <td><strong><code>onAnimationBegin</code></strong></td>
                <td><em>None</em></td>
                <td>A function that is called when the animation has been started.</td>
              </tr>
              <tr>
                <td><strong><code>onAnimationEnd</code></strong></td>
                <td><em>None</em></td>
                <td>A function that is called when the animation has been completed successfully or cancelled. Function is called with an <code>endState</code> argument, refer to <code>endState.finished</code> to see if the animation completed or not.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <WebPlayer
            code={code}
            vendorComponents={vendorComponents}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
