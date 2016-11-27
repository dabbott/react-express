import React, { Component } from 'react'
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

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
`

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
`

export default class ListViews extends Component {
  render() {
    return (
      <Page footer={this.props.footer} title={'ListViews'}>
        <div style={styles.well}>
          <div style={styles.h3}>ListViews</div>
          <div style={styles.p}>
            <code>ListViews</code>s are used for large quantities of scrollable content. They expose the underlying <code>ScrollView</code>, but add performance improvements: only rendering the content on screen (clipping offscreen content), and only updating rows that have changed. Like <code>ScrollView</code>s, they can scroll horizontally or vertically.
          </div>
          <div style={styles.p}>
            Instead of rendering their <code>children</code> prop, <code>ListViews</code>s render each item in their input <code>dataSource</code> using the <code>renderRow</code> prop. The <code>renderRow</code> prop is a function which takes an item from the <code>dataSource</code> and maps it to a React Element, e.g. if <code>dataSource</code> contains an array of strings, then <code>{`(rowData) => <Text>{rowData}</Text>`}</code>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>DataSource</div>
          <div style={styles.p}>
            <code>ListView</code>s render content using the <code>DataSource</code> API. In its simplest usage, <code>DataSource</code> takes an array as input. The array can contain any kind of data.
          </div>
          <div style={styles.p}>
            To provide data to a <code>ListView</code>, you must create a new source with <code>new ListView.DataSource(options)</code>, where <code>options</code> must be an object with a <code>rowHasChanged</code> function defined. <code>rowHasChanged</code> compares row data so that only the rows which have actually changed will be re-rendered. Depending on what kind of data you're rendering, a suitable <code>rowHasChanged</code> function might look like:
            <ul>
              <li><code>(r1, r2) => r1 !== r2</code> (identity comparison)</li>
              <li><code>(r1, r2) => r1.id !== r2.id</code> (comparing a specific field)</li>
              <li><code>(r1, r2) => !_.isEqual(r1, r2)</code> (deep equality with lodash)</li>
            </ul>
          </div>
          <div style={styles.p}>
            After instantiation, you must call <code>DataSource.cloneWithRows(inputArray)</code> with your array of row data. We'll then pass the return value of the <code>cloneWithRows()</code> call to the <code>dataSource</code> prop of the <code>ListView</code>. Since we only want to call <code>cloneWithRows()</code> on initialization or when data changes (it's slow, so we shouldn't call it in render), we often store this value in the component's <code>state</code>, and call e.g. <code>{`this.setState({dataSource: this.state.dataSource.cloneWithRows(newData)})`}</code> when we need to update the dataSource.
          </div>
          <div style={styles.p}>
            We'll look at two examples: one basic example, and then a more complex example which also renders section headers.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Basic Example</div>
          <WebPlayer code={code} />
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Sections Example</div>
          <div style={styles.p}>
            <code>ListView</code>s may also render section headers. On iOS, these headers can be sticky.
          </div>
          <div style={styles.p}>
            To render section headers, you'll need to:
            <ul>
              <li>Format your data as an object, where keys are section names and values are row data, <code>{`{firstSection: [rowData1, rowData2, ...], ...}`}</code></li>
              <li>Create a <code>sectionHeaderHasChanged = (s1, s2) => bool</code> function and pass it to your <code>DataSource</code> upon instantiation</li>
              <li>Use <code>ds.cloneWithRowsAndSections(rows)</code> on your <code>DataSource</code> instance</li>
              <li>Pass a <code>renderSectionHeader</code> prop, <code>(rows, sectionId) => Element</code>, to the <code>ListView</code></li>
            </ul>
          </div>
          <WebPlayer code={sectionsExample} />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
