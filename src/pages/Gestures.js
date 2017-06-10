import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

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
`;

const content = markdown(markdownOptions)`
In React Native, gestures are created using the \`PanResponder\` API.

## **\`PanResponder\`**

Most built-in React Native components (\`View\`, \`Text\`, etc) can become a responder and handle touch events. You'll need to create a set of \`panHandlers\` and pass them into your component as props. Call \`{'panResponder = PanResponder.create(panHandlers)'}\` with an object containing handlers to create a \`PanResponder\`. You can then access \`panResponder.panHandlers\`, which will be an enhanced version of the handlers object you passed in.

## **\`PanHandlers\`**

You will likely want to handle \`onStartShouldSetPanResponder\` or \`onMoveShouldSetPanResponder\` to become a response and handle the gesture. Beyond that, you'll likely want to handle the \`Grant\`, \`Move\`, \`Release\`, and \`Terminate\` to update your UI in response to the gesture. Unless you have many complex gestures in your app, you generally won't need to include every handler to get a working gesture.

Here's the list of *all* handlers:
- \`${`onMoveShouldSetPanResponder: (e, gestureState) => {...}`}\`
- \`${`onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`}\`
- \`${`onStartShouldSetPanResponder: (e, gestureState) => {...}`}\`
- \`${`onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`}\`
- \`${`onPanResponderReject: (e, gestureState) => {...}`}\`
- \`${`onPanResponderGrant: (e, gestureState) => {...}`}\`
- \`${`onPanResponderStart: (e, gestureState) => {...}`}\`
- \`${`onPanResponderEnd: (e, gestureState) => {...}`}\`
- \`${`onPanResponderRelease: (e, gestureState) => {...}`}\`
- \`${`onPanResponderMove: (e, gestureState) => {...}`}\`
- \`${`onPanResponderTerminate: (e, gestureState) => {...}`}\`
- \`${`onPanResponderTerminationRequest: (e, gestureState) => {...}`}\`
- \`${`onShouldBlockNativeResponder: (e, gestureState) => {...}`}\`

More details are available on each of these in the [docs](https://facebook.github.io/react-native/docs/panresponder.html).

# Example

${(
  <WebPlayer
    title={"Gestures"}
    code={code}
    scale={1} // Fixes dragging position (almost)
  />
)}

# Responder Control Flow

The following diagram illustrates how a component can acquire responder status.

${(
  <figure>
    <img
      style={{ paddingTop: 40, width: 550 }}
      src={"pan-responder-flow.png"}
    />
    <figcaption style={{ paddingBottom: 40 }}>
      Figure 4-3, Obtaining touch responder status, from{" "}
      <em>
        <a href={"http://shop.oreilly.com/product/0636920041511.do"}>
          Learning React Native
        </a>, First Edition, p. 56
      </em>
    </figcaption>
  </figure>
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
