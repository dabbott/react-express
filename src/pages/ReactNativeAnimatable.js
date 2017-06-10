import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

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
`;

const vendorComponents = [
  [
    "react-native-animatable",
    "https://cdn.rawgit.com/dabbott/8335f232c8c90ef056ac5912e6cd4b38/raw/88841a962dc104b02b9e9919c5ad7a46c6c382d9/react-native-animatable.js"
  ]
];

const content = markdown(markdownOptions)`
React Native Animatable is a library for declarative animations. See the Github repo [here](https://github.com/oblador/react-native-animatable).

Creating animations is much easier than with \`Animated\`. Like with \`Animated\`, we'll first need to use a specially wrapped component: \`Animatable.View\`, \`Animatable.Text\`, \`Animatable.Image\`, or \`Animatable.createAnimatableComponent(Component)\`. From there, we add an \`animation\` prop to our component to specify which kind of animation to use, e.g. \`fadeIn\`. We can control the parameters of the animation through props.

# Example

${(
  <WebPlayer
    title={"React Native Animatable"}
    code={code}
    vendorComponents={vendorComponents}
  />
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
