import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const code = `import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

// Row data (hard-coded)
const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

class App extends Component {

  state = {
    dataSource: ds.cloneWithRows(rows)
  }

  renderRow = (rowData) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const sectionsExample = `import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

// Row data (hard-coded)
const rows = {
  'Basic Components': [
    {id: 0, text: 'View'},
    {id: 1, text: 'Text'},
    {id: 2, text: 'Image'},
  ],
  'List Components': [
    {id: 3, text: 'ScrollView'},
    {id: 4, text: 'ListView'},
  ],
}

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

class App extends Component {

  state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  }

  renderRow = (rowData, sectionId) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <Text style={styles.header}>
        {sectionId} ({sectionRows.length})
      </Text>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const content = markdown(markdownOptions)`
\`ListViews\`s are used for large quantities of scrollable content. They expose the underlying \`ScrollView\`, but add performance improvements: only rendering the content on screen (clipping offscreen content), and only updating rows that have changed. Like \`ScrollView\`s, they can scroll horizontally or vertically.

Instead of rendering their \`children\` prop, \`ListViews\`s render each item in their input \`dataSource\` using the \`renderRow\` prop. The \`renderRow\` prop is a function which takes an item from the \`dataSource\` and maps it to a React Element, e.g. if \`dataSource\` contains an array of strings, then \`${`(rowData) => <Text>{rowData}</Text>`}\`.

# DataSource

\`ListView\`s render content using the \`DataSource\` API. In its simplest usage, \`DataSource\` takes an array as input. The array can contain any kind of data.

To provide data to a \`ListView\`, you must create a new source with \`new ListView.DataSource(options)\`, where \`options\` must be an object with a \`rowHasChanged\` function defined. \`rowHasChanged\` compares row data so that only the rows which have actually changed will be re-rendered. Depending on what kind of data you're rendering, a suitable \`rowHasChanged\` function might look like:
- \`(r1, r2) => r1 !== r2\` (identity comparison)
- \`(r1, r2) => r1.id !== r2.id\` (comparing a specific field)
- \`(r1, r2) => !_.isEqual(r1, r2)\` (deep equality with lodash)

After instantiation, you must call \`DataSource.cloneWithRows(inputArray)\` with your array of row data. We'll then pass the return value of the \`cloneWithRows()\` call to the \`dataSource\` prop of the \`ListView\`. Since we only want to call \`cloneWithRows()\` on initialization or when data changes (it's slow, so we shouldn't call it in render), we often store this value in the component's \`state\`, and call e.g. \`${`this.setState({dataSource: this.state.dataSource.cloneWithRows(newData)})`}\` when we need to update the dataSource.

We'll look at two examples: one basic example, and then a more complex example which also renders section headers.

# Basic Example

${<WebPlayer code={code} />}

# Sections Example

\`ListView\`s may also render section headers. On iOS, these headers can be sticky.

To render section headers, you'll need to:

- Format your data as an object, where keys are section names and values are row data, \`${`{firstSection: [rowData1, rowData2, ...], ...}`}\`
- Create a \`sectionHeaderHasChanged = (s1, s2) => bool\` function and pass it to your \`DataSource\` upon instantiation
- Use \`ds.cloneWithRowsAndSections(rows)\` on your \`DataSource\` instance
- Pass a \`renderSectionHeader\` prop, \`(rows, sectionId) => Element\`, to the \`ListView\`

${<WebPlayer code={sectionsExample} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
