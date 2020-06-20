import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const code = `import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const content = markdown(markdownOptions)`
\`Image\` is used to render images. Images may either be bundled with the app as assets, or downloaded from the web.

To bundle an image in the app, \`require()\` the image file just as you would any other file. When loading bundled images, the same images are used to render on both iOS and Android. Writing \`require('./test.png')\` will choose the most appropriate image for the device size: \`test.png\`, \`test@2x.png\`, or \`test@3x.png\`.

For images downloaded from the web, layout works differently than for most other elements. Since the dimensions of the image aren't known until the image is downloaded, images can't be automatically stretched with \`flex: 1\`. Instead, you must specify dimensions in the style prop, e.g. \`${"style={{width: 100, height: 100}}"}\`. React Native is evolving quickly, however, and this behavior may change - when in doubt, try a few different layouts and see what happens!

${<WebPlayer code={code} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
