import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const avatarItemFile = `import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connectStyle } from '@shoutem/theme'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

const AvatarText = connectStyle('com.example.AvatarText')(Text)

class AvatarItem extends Component {
  render() {
    const {style} = this.props

    return (
      <View style={[style.container, style]}>
        <Image
          style={style.avatarImage}
          source={imageSource}
        />
        <AvatarText style={style.title}>
          John Doe
        </AvatarText>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}

export default connectStyle('com.example.AvatarItem', styles)(AvatarItem)
`;

const indexFile = `import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { StyleProvider, connectStyle } from '@shoutem/theme'

import AvatarItem from './AvatarItem'

const theme = {
  'com.example.AvatarItem': {

    '.selected': {
      backgroundColor: 'skyblue',

      'com.example.AvatarText': {
        color: 'white',
      }
    },
  }
}

class App extends Component {
  render() {
    return (
      <StyleProvider style={theme}>
        <View>
          <AvatarItem />
          <AvatarItem styleName={'selected'} />
          <AvatarItem />
          <AvatarItem />
        </View>
      </StyleProvider>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
`;

const files = [["index.js", indexFile], ["AvatarItem.js", avatarItemFile]];

const vendorComponents = [
  [
    "@shoutem/theme",
    "https://cdn.rawgit.com/dabbott/theme/f94c5c8c27fbdd673e3c0730730f8ab61d39613f/dist/shoutem-theme.js"
  ]
];

const content = markdown(markdownOptions)`
Shoutem themes immitate the naming schemes and hierarchical selectors of CSS. If you're coming from React for web and prefer using CSS (or postcss, sass, etc) to inline styles, you'll feel right at home with Shoutem themes.

Shoutem UI includes a predefined theme with several variations for all components. You can read the full list of styles and supported CSS selectors [here](https://github.com/shoutem/ui/blob/develop/theme.js). You can read more about theming in Shoutem in general [here](http://shoutem.github.io/docs/ui-toolkit/theme/introduction).

# Shoutem Theme API

## \`StyleProvider\`

The Shoutem theme library exposes the \`StyleProvider\` component to handle passing our theme to every component that needs it. We'll generally use this to wrap the root component of our app, e.g. \`${`<StyleProvider style={theme}> ... </StyleProvider>`}\`.

## \`connectStyle(selector, styles)(Component) => Component\`

We use \`connectStyle()\` to specify a CSS-like selector for our component (e.g. \`'com.name.Button'\`) and to attach our styles (we don't need to use \`StyleSheet.create()\`) to our components so that they can be overriden by themes.

# Example

In this example, we'll connect default styles within our \`AvatarItem\` component, and then pass a global theme to our app to let us use CSS-like \`styleName\`s and override the default styles.

This example touches some more advanced concepts, so if you don't fully understand it, consider continuing on to [data management](data) and coming back later.

## Files

- \`index.js\`\\
  Here we define our theme and provide to all components via \`StyleProvider\`. Notice that we define styles to apply to our \`AvatarItem\` when we give it the \`selected\` stylename. We also specify that any \`AvatarText\` children should be styled.

- \`AvatarItem.js\`\\
  \`AvatarItem\` is connected to our theme with \`connectStyle\`. We can mix and match styles defined as plain objects and styles from our theme. Our themed styles are available directly on the object \`this.props.style\`. Our styles defined as plain objects, e.g. \`container\`, are available as \`this.props.style.container\`. Notice how we have to connect \`AvatarText\` in order for it to use styles defined as part of our theme.

${<WebPlayer files={files} vendorComponents={vendorComponents} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
