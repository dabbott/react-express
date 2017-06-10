import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

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
`;

const content = markdown(markdownOptions)`
The \`Animated\` API helps you interpolate values used in component styles. There are two APIs we need to set up an animation. We need to wrap a value that we want to interpolate, and then we need to use it in the styles of a component.

## **\`Animated.Value\`**

\`Animated.Value\` wraps a value that we want to interpolate. This is typically a number, but can also be a string (e.g. a color). To wrap a value, call \`new Animated.Value(value)\` with your value. If we call, e.g. \`new Animated.Value(200)\`, this means we want the initial state of some animated property to be \`200\`.

## **\`Animated.View | Animated.Text | Animated.Image | Animated.createAnimatedComponent(Component)\`**

\`Animated\` provides specially wrapped versions of the standard \`View\`, \`Text\`, and \`Image\` components. These wrapped components can have \`Animated.Value\`s in their \`style\` prop. If you want to animate something other than one of these three, you can wrap any component yourself, e.g. \` AnimatedButton = Animated.createAnimatedComponent(Button)\`.

## Starting the animation

Once we have our wrapped values and components set up, we need to specify the target value of our animation and the easing function used during interpolation. After that, we start the animation. This will look something like \`{'Animated.spring(value, {toValue: 300, friction: 0.8}).start()'}\`. Here are a few of the common ways to interpolate values:

- \`${"spring(value, {toValue, friction = 7, tension = 40})"}\` - spring to a new value
- \`${"decay(value, {velocity, deceleration = 0.997})"}\` - decay the value to 0, provided an initial velocity
- \`${"timing(value, {toValue, duration = 500, delay = 0, easing = Easing.inOut(Easing.ease)})"}\` - ease into a new value, given an [easing function](https://facebook.github.io/react-native/docs/easing.html)

The full list of methods on \`Animated\` is available [here](https://facebook.github.io/react-native/docs/animated.html#methods).

# Example

${<WebPlayer title={"Animated"} code={code} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
