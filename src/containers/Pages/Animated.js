import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

// Wrap a component to make it animatable
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default class App extends Component {

  state = {height: new Animated.Value(100)}

  startAnimation = () => {
    const {height} = this.state

    // Reset the value if needed
    height.setValue(100)

    // Start a spring animation
    Animated.spring(height, {toValue: 300, friction: 0.8}).start()
  }

  componentDidMount() {
    this.startAnimation()
  }

  render() {
    const {height} = this.state

    return (
      <AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.button, {height}]}
      >
        <Text style={styles.text}>
          Tap Me
        </Text>
      </AnimatedTouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
  },
})

AppRegistry.registerComponent('App', () => App)
`

export default class View extends Component {
  render() {
    return (
      <Page title={'Animated'}>
        <div style={styles.well}>
          <div style={styles.h3}>Animated</div>
          <div style={styles.p}>
            The <code>Animated</code> API helps you interpolate values used in component styles. There are two parts to the API.
          </div>
          <div style={styles.h4_monospace}>Animated.Value</div>
          <div style={styles.p}>
            <code>Animated.Value</code> wraps a value that we want to interpolate. This is typically a number, but can also be a string (e.g. a color). To wrap a value, call <code>new Animated.Value(value)</code> with your value.
          </div>
          <div style={styles.h4_monospace}>Animated.View | Animated.Text | Animated.Image | Animated.createAnimatedComponent(Component)</div>
          <div style={styles.p}>
            <code>Animated</code> provides specially wrapped versions of the standard <code>View</code>, <code>Text</code>, and <code>Image</code> components. These wrapped components can have <code>Animated.Value</code>s in their <code>style</code> prop. If you want to animate something other than one of these three, you can wrap any component yourself, e.g. <code> AnimatedButton = Animated.createAnimatedComponent(Button)</code>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <WebPlayer code={code} />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
