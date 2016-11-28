import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, PanResponder } from 'react-native'

export default class App extends Component {

  state = {
    dragging: false,
    initialTop: 50,
    initialLeft: 50,
    offsetTop: 0,
    offsetLeft: 0,
  }

  panResponder = {}

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
    })
  }

  render() {
    const {dragging, initialTop, initialLeft, offsetTop, offsetLeft} = this.state

    // Update style with the state of the drag thus far
    const style = {
      backgroundColor: dragging ? 'skyblue' : 'steelblue',
      top: initialTop + offsetTop,
      left: initialLeft + offsetLeft,
    }

    return (
      <View style={styles.container}>
        <View
          // Put all panHandlers into the View's props
          {...this.panResponder.panHandlers}
          style={[styles.square, style]}
        >
          <Text style={styles.text}>
            DRAG ME
          </Text>
        </View>
      </View>
    )
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true
  }

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    this.setState({dragging: true})
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    const {initialTop, initialLeft} = this.state

    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx,
    })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const {initialTop, initialLeft} = this.state

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  }
})

AppRegistry.registerComponent('App', () => App)
`

export default class Gestures extends Component {
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
            In React Native, gestures are created using the <code>PanResponder</code> API.
          </div>
          <div style={styles.h4_monospace}>PanResponder</div>
          <div style={styles.p}>
            Most built-in React Native components (<code>View</code>, <code>Text</code>, etc) can become a responder and handle touch events. You'll need to create a set of <code>panHandlers</code> and pass them into your component as props. Call <code>{'panResponder = PanResponder.create(panHandlers)'}</code> with an object containing handlers to create a <code>PanResponder</code>. You can then access <code>panResponder.panHandlers</code>, which will be an enhanced version of the handlers object you passed in.
          </div>
          <div style={styles.h4_monospace}>PanHandlers</div>
          <div style={styles.p}>
            You will likely want to handle <code>onStartShouldSetPanResponder</code> or <code>onMoveShouldSetPanResponder</code> to become a response and handle the gesture. Beyond that, you'll likely want to handle the <code>Grant</code>, <code>Move</code>, <code>Release</code>, and <code>Terminate</code> to update your UI in response to the gesture. Unless you have many complex gestures in your app, you generally won't need to include every handler to get a working gesture.
          </div>
          <div style={styles.p}>
            Here's the list of <i>all</i> handlers:
          </div>
          <ul>
            <li><code>{`onMoveShouldSetPanResponder: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onStartShouldSetPanResponder: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderReject: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderGrant: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderStart: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderEnd: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderRelease: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderMove: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderTerminate: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onPanResponderTerminationRequest: (e, gestureState) => {...}`}</code></li>
            <li><code>{`onShouldBlockNativeResponder: (e, gestureState) => {...}`}</code></li>
          </ul>
          <div style={styles.p}>
            More details are available on each of these in the <a href={'https://facebook.github.io/react-native/docs/panresponder.html'}>docs</a>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <WebPlayer
            title={'Gestures'}
            code={code}
            scale={1} // Fixes dragging position (almost)
          />
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Responder Control Flow</div>
          <div style={styles.p}>
            The following diagram illustrates how a component can acquire responder status.
          </div>
          <figure>
            <img
              style={{paddingTop: 40, width: 550}}
              src={'pan-responder-flow.png'}
            />
            <figcaption style={{paddingBottom: 40}}>
              Figure 4-3, Obtaining touch responder status, from <em><a href={'http://shop.oreilly.com/product/0636920041511.do'}>Learning React Native</a>, First Edition, p. 56</em>
            </figcaption>
          </figure>
        </div>
      </Page>
    )
  }
}
