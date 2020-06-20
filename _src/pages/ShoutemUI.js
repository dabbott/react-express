import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer, GithubRepositoryLink } from "../components";

const code = `import React, { Component } from 'react'
import { AppRegistry, ScrollView } from 'react-native'
import {
  View,
  Text,
  Image,
  Tile,
  Heading,
  Title,
  Subtitle,
  Caption,
  Divider,
  Card,
  Button,
  TextInput,
} from '@shoutem/ui'

const imageSources = [
  {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'},
  {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-4.png'},
]

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Tile styleName={'text-centric inflexible'}>
          <Title>
            Shoutem UI
          </Title>
        </Tile>
        <Divider styleName={'section-header'}>
          <Caption>INPUTS</Caption>
        </Divider>
        <TextInput placeholder={'Type here'} />
        <Divider styleName={'section-header'}>
          <Caption>BUTTONS</Caption>
        </Divider>
        <View
          style={styles.row}
          styleName={'md-gutter'}
        >
          <Button styleName={'dark'}>
            <Text>Button 1</Text>
          </Button>
          <Button styleName={'md-gutter-left'}>
            <Text>Button 2</Text>
          </Button>
        </View>
        <Divider styleName={'section-header'}>
          <Caption>CARDS</Caption>
        </Divider>
        <Tile styleName={'stretch'}>
          <Image
            styleName={'large'}
            source={imageSources[0]}
          />
          <View styleName={'content'}>
            <Subtitle>Large Card with Image and Caption</Subtitle>
            <Caption>21 hours ago</Caption>
          </View>
        </Tile>
        <Divider styleName={'section-header'}>
          <Caption>...AND MORE!</Caption>
        </Divider>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
}

AppRegistry.registerComponent('App', () => App)
`;

const vendorComponents = [
  [
    "@shoutem/theme",
    "https://cdn.rawgit.com/dabbott/theme/f94c5c8c27fbdd673e3c0730730f8ab61d39613f/dist/shoutem-theme.js"
  ],
  [
    "@shoutem/animation",
    "https://cdn.rawgit.com/dabbott/animation/496810888db6cc0bc19c0d3abbcc9a4de8e8a0dc/dist/shoutem-animation.js"
  ],
  [
    "@shoutem/ui",
    "https://cdn.rawgit.com/dabbott/ui/4b7e380626c8beb0f4fb199078d40ef2da7e702a/dist/shoutem-ui.js"
  ]
];

const content = markdown(markdownOptions)`
Shoutem UI is a themable, animatable component collection. Of the common component libraries available today, Shoutem likely prioritizes design the most. Apps built with these components tend to look beautiful and consistent without too much time spent pixel-pushing.

The components available thus far are more presentational than navigational. Shoutem focuses on cards with text, buttons, and rich media, which can then be combined into lists and grids. Shoutem doesn't provide drawers, tab bars, modals, etc. You would still want to use a navigation library for those components.

There are three distinct libraries:

- ${(
  <GithubRepositoryLink
    user={"shoutem"}
    repo={"ui"}
    title={"Shoutem Components"}
  />
)}\\
  A collection of ~100 UI components, including typography, buttons, lists, grids, etc.

- ${(
  <GithubRepositoryLink
    user={"shoutem"}
    repo={"animation"}
    title={"Shoutem Animation"}
  />
)}\\
  Declarative animations to apply to your components

- ${(
  <GithubRepositoryLink
    user={"shoutem"}
    repo={"theme"}
    title={"Shoutem Themes"}
  />
)}\\
  CSS-like theming for components

# Component Sandbox

Consider the following example a sandbox for testing the various <code>@shoutem/ui</code> components.

Getting started with Shoutem can be a little slow at first, because it introduces many new components and predefined styles (which are different for each component). However, once you get the hang of it, you'll find you can put together new screens extremely quickly. You'll likely want these pages open for reference:

- [Shoutem UI Components](http://shoutem.github.io/docs/ui-toolkit/components/typography)\\
  The list of components and how to use them.

- [Shoutem UI Introduction](http://shoutem.github.io/docs/ui-toolkit/introduction)\\
  This page describes the common <code>styleName</code>s for manipulating dimensions and margins.

- [Default theme file](https://github.com/shoutem/ui/blob/develop/theme.js)\\
  This is the list of default styles applied to components. You may override these defaults using the <code>style</code> prop on a component. This will make more sense after reading the [Shoutem Themes](shoutem_ui_theme) section.

Some components won't display 100% accurately in the web simulator, so when you've decided to use Shoutem, it's best to get started with a real React Native app in your local development environment.

${(
  <WebPlayer
    title={"Shoutem UI"}
    code={code}
    vendorComponents={vendorComponents}
  />
)}

Let's take a look at how we can apply themes and animations to these components.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
