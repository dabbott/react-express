import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'

import * as Animatable from 'react-native-animatable'

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F']
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut']

export default class App extends Component {

  state = {animation: animations[0]}

  nextAnimation = () => {
    const {animation} = this.state
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length

    this.setState({animation: animations[nextIndex]})
  }

  renderItem = (color, i) => {
    const {animation} = this.state

    return (
      <Animatable.View
        key={i}
        animation={animation}
        delay={i * 100}
        style={[styles.button, {backgroundColor: color}]}
      >
        <Text style={styles.text}>{i}</Text>
      </Animatable.View>
    )
  }

  render() {
    const {animation} = this.state

    return (
      <TouchableOpacity
        // use key to force a re-render when we switch animations
        key={animation}
        onPress={this.nextAnimation}
      >
        {colors.map(this.renderItem)}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
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
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            React Native Animatable is a library for declarative animations. See the Github repo <a href={'https://github.com/oblador/react-native-animatable'}>here</a>.
          </div>
          <div style={styles.p}>
            Creating animations is much easier than with <code>Animated</code>. Like with <code>Animated</code>, we'll first need to use a specially wrapped component: <code>Animatable.View</code>, <code>Animatable.Text</code>, <code>Animatable.Image</code>, or <code>Animatable.createAnimatableComponent(Component)</code>. From there, we add an <code>animation</code> prop to our component to specify which kind of animation to use, e.g. <code>fadeIn</code>. We can control the parameters of the animation through props.
          </div>
          <div style={styles.p}>
            The full list of props and animation types are available below the example, for you to experiment with.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <WebPlayer
            title={'React Native Animatable'}
            code={code}
            vendorComponents={vendorComponents}
          />
        </div>
        <div style={styles.h4}>Animatable props</div>
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
        <div style={styles.h4}>Animation Types</div>
        <table className={'table'}>
          <thead>
            <tr>
              <th>Attention Seekers</th>
              <th>Bouncing Entrances</th>
              <th>Bouncing Exits</th>
              <th>Fading Entrances</th>
              <th>Fading Exits</th>
              <th>Flippers</th>
              <th>Lightspeed</th>
              <th>Sliding Entrances</th>
              <th>Sliding Exits</th>
              <th>Zooming Entrances</th>
              <th>Zooming Exits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bounce</td>
              <td>bounceIn</td>
              <td>bounceOut</td>
              <td>fadeIn</td>
              <td>fadeOut</td>
              <td>flipInX</td>
              <td>lightSpeedIn</td>
              <td>slideInDown</td>
              <td>slideOutDown</td>
              <td>zoomIn</td>
              <td>zoomOut</td>
            </tr>
            <tr>
              <td>flash</td>
              <td>bounceInDown</td>
              <td>bounceOutDown</td>
              <td>fadeInDown</td>
              <td>fadeOutDown</td>
              <td>flipInY</td>
              <td>lightSpeedOut</td>
              <td>slideInUp</td>
              <td>slideOutUp</td>
              <td>zoomInDown</td>
              <td>zoomOutDown</td>
            </tr>
            <tr>
              <td>jello</td>
              <td>bounceInUp</td>
              <td>bounceOutUp</td>
              <td>fadeInDownBig</td>
              <td>fadeOutDownBig</td>
              <td>flipOutX</td>
              <td></td>
              <td>slideInLeft</td>
              <td>slideOutLeft</td>
              <td>zoomInUp</td>
              <td>zoomOutUp</td>
            </tr>
            <tr>
              <td>pulse</td>
              <td>bounceInLeft</td>
              <td>bounceOutLeft</td>
              <td>fadeInUp</td>
              <td>fadeOutUp</td>
              <td>flipOutY</td>
              <td></td>
              <td>slideInRight</td>
              <td>slideOutRight</td>
              <td>zoomInLeft</td>
              <td>zoomOutLeft</td>
            </tr>
            <tr>
              <td>rotate</td>
              <td>bounceInRight</td>
              <td>bounceOutRight</td>
              <td>fadeInUpBig</td>
              <td>fadeOutUpBig</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>zoomInRight</td>
              <td>zoomOutRight</td>
            </tr>
            <tr>
              <td>rubberBand</td>
              <td></td>
              <td></td>
              <td>fadeInLeft</td>
              <td>fadeOutLeft</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>shake</td>
              <td></td>
              <td></td>
              <td>fadeInLeftBig</td>
              <td>fadeOutLeftBig</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>swing</td>
              <td></td>
              <td></td>
              <td>fadeInRight</td>
              <td>fadeOutRight</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>tada</td>
              <td></td>
              <td></td>
              <td>fadeInRightBig</td>
              <td>fadeOutRightBig</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>wobble</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Page>
    )
  }
}
