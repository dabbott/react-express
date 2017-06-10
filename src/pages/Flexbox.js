import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const toggleFile = `import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props

    onChange(option)
  }

  renderOption = (option) => {
    const {value, options} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})
`;

const indexFile = `import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

class App extends Component {

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const files = [["index.js", indexFile], ["Toggle.js", toggleFile]];

const content = markdown(markdownOptions)`
Components specify the layout of their children using the <b>flexbox</b> algorithm. Using flexbox lets you specify a layout that expands or shrinks to fill screens of various dimensions. You can seamlessly mix and match these automatic layouts with fixed sizes like <code>width: 100</code>.

To choose the right layout for a component's children, you must make 3 choices:

Property | Default | Options | Description
---      | ---     | ---     | ---
\`flexDirection\` | \`column\` | \`row, column\` | Do you want a vertical (\`column\`) or horizontal (\`row\`) layout? This choice determines the orientation of the **primary axis** of your layout.
\`justifyContent\` | \`flex-start\` | \`flex-start, center, flex-end, space-around, space-between\` | How should the content be distributed along the <b>primary axis</b> of your layout? Should it be at the start, the center, the end, or spaced evenly?
\`alignItems\` | \`stretch\` | \`flex-start, center, flex-end, stretch\` | How should the content be aligned along the <b>secondary axis</b> of your layout? (If the primary axis is \`row\`, then the secondary axis is \`column\`, and vice versa) Should content be aligned at the start, the center, the end, or stretched to fill?

The following example lets you try all the possible combinations of flexbox properties and layouts.

${<WebPlayer files={files} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
