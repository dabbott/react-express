import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const timingDriverExample = `import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Easing,
  Dimensions,
} from 'react-native'
import { TimingDriver, FadeIn } from '@shoutem/animation'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

class App extends React.Component {

  driver = new TimingDriver({
    duration: 1000,    // default: 250
    easing: Easing.in, // default: Easing.cubic
    delay: 200,        // default: 0
  })

  runAnimation = () => this.driver.runTimer(1)

  resetAnimation = () => this.driver.runTimer(0)

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.runAnimation}
        >
          <Text style={styles.text}>
            Run Animation
          </Text>
        </TouchableOpacity>
        <FadeIn driver={this.driver}>
          <Image
            style={styles.image}
            source={imageSource}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.resetAnimation}
          >
            <Text style={styles.text}>
              Reset Animation
            </Text>
          </TouchableOpacity>
        </FadeIn>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 15,
    padding: 30,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const scrollDriverExample = `import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  FadeOut,
  FadeIn,
  ZoomOut,
  ZoomIn,
  ScrollDriver,
} from '@shoutem/animation'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

class App extends Component {

  driver = new ScrollDriver()

  renderHeader = () => {
    const {driver} = this

    return (
      <FadeIn style={styles.header} driver={driver} inputRange={[100, 300]}>
        <Image style={styles.thumbnail} source={imageSource} />
        <Text>Hello World</Text>
      </FadeIn>
    )
  }

  renderScrollView = () => {
    const {driver} = this

    return (
      <ScrollView {...driver.scrollViewProps}>
        <View style={styles.content}>
          <ZoomIn driver={driver} inputRange={[100, 300]}>
            <FadeOut driver={driver} inputRange={[100, 300]}>
              <Image style={styles.image} source={imageSource}>
                <Text style={styles.text}>
                  Hello World
                </Text>
              </Image>
            </FadeOut>
          </ZoomIn>
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScrollView()}
        {this.renderHeader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 1000,
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    color: 'white',
  }
});

AppRegistry.registerComponent('App', () => App);
`;

const vendorComponents = [
  [
    "@shoutem/animation",
    "https://cdn.rawgit.com/dabbott/animation/496810888db6cc0bc19c0d3abbcc9a4de8e8a0dc/dist/shoutem-animation.js"
  ]
];

const content = markdown(markdownOptions)`
Shoutem animations are built from with two parts: a \`Driver\` and an \`Animation Component\`

## Driver

A \`Driver\` automatically modifies a value, such as a number or color, in response to external changes: time, scroll position, touch position, etc. This value can then be connected to a component's styles, to modify position, layout, color, etc, based on the external changes.

In terms of implementation, a \`Driver\` is a minimal wrapper around an \`Animated.Value\` (more on \`Animated\` in a [later chapter](animated). To get a better understanding of drivers, take a look at the [TimingDriver](https://github.com/shoutem/animation/blob/develop/src/drivers/TimingDriver.js), which is only ~20 lines of code.

## Animation Component

Shoutem ships with a handful of premade animation components:

- **\`FadeIn\`**
- **\`FadeOut\`**
- **\`ZoomIn\`**
- **\`ZoomOut\`**
- **\`Parallax\`**

These components will animate their \`children\`, according to the \`Driver\` used. To use one of these components, you must first create a driver, such as a \`TimingDriver\`, and then pass it to the animation component as the prop \`driver\`.

# TimingDriver Example

Let's take a look at a simple example: fading a component in based on time.

The \`Driver\` API is imperative, so we must create an instance of a driver and call \`runTimer\` to use it.

In this example, we'll create our driver with \`new TimingDriver\`, passing (optionally) a \`duration\`, \`delay\`, and \`easing\` function. Since the driver doesn't directly affect rendering, it's more idiomatic to make it an instance variable of the component (accessible via \`this.driver\`) than to put it in the component's \`state\`.

We must then start the animation with \`runTimer(progress)\`. Timing animations represent their progress in the range of values [0, 1]. To run an animation to completion, call \`runTimer(1)\`. To run it halfway, \`runTimer(0.5)\`. You may call \`runTimer\` multiple times with different progresses, including going back to the start with \`runTimer(0)\`.

The last step is to connect our driver to our \`FadeIn\` component as a prop: \`${"<FadeIn driver={this.driver}> ... </FadeIn>"}\`.

${(
  <WebPlayer
    title={"TimingDriver"}
    code={timingDriverExample}
    vendorComponents={vendorComponents}
  />
)}

# ScrollDriver Example

Let's take a look at another example: zooming and fading components in and out based on scroll position. There are a few key differences from the \`TimingDriver\` example.

First, our \`ScrollDriver\` controls the progress of animations based on the scroll position of our \`ScrollView\`, so we must feed the scroll position into our \`ScrollDriver\`. To connect our \`ScrollDriver\` to our \`ScrollView\`, we spread \`driver.scrollViewProps\` into the \`ScrollView\`'s props.

Second, the input to the animation is no longer within the range [0, 1]. The input is a scroll position, so we must specify the start and end range with the \`inputRange\` prop on our animation components. We might say \`${"inputRange={[100, 200]}"}\` to start our animation at scroll position 100, and end it at scroll position 200.

${(
  <WebPlayer
    title={"ScrollDriver"}
    code={scrollDriverExample}
    vendorComponents={vendorComponents}
  />
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
