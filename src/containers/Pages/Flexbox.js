import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../../components'

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
`

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
`

const files = [
  ['index.js', indexFile],
  ['Toggle.js', toggleFile],
]

export default class View extends Component {
  render() {
    return (
      <Page title={'Flexbox'}>
        <div style={styles.well}>
          <div style={styles.h3}>Flexbox</div>
          <div style={styles.p}>
            Components specify the layout of their children using the <b>flexbox</b> algorithm. Using flexbox lets you specify a layout that expands or shrinks to fill screens of various dimensions. You can seamlessly mix and match these automatic layouts with fixed sizes like <code>width: 100</code>.
          </div>
          <div style={styles.p}>
            To choose the right layout for a component's children, you must make 3 choices:
          </div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Options</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>flexDirection</code></td>
                <td><code>column</code></td>
                <td><code>row, column</code></td>
                <td>Do you want a vertical (<code>column</code>) or horizontal (<code>row</code>) layout?. This choice determines the orientation of the <b>primary axis</b> of your layout.</td>
              </tr>
              <tr>
                <td><code>justifyContent</code></td>
                <td><code>flex-start</code></td>
                <td><code>flex-start, center, flex-end, space-around, space-between</code></td>
                <td>How should the content be distributed along the <b>primary axis</b> of your layout? Should it be at the start, the center, the end, or spaced evenly?</td>
              </tr>
              <tr>
                <td><code>alignItems</code></td>
                <td><code>flex-start</code></td>
                <td><code>flex-start, center, flex-end, stretch</code></td>
                <td>How should the content be aligned along the <b>secondary axis</b> of your layout? (If the primary axis is <code>row</code>, then the secondary axis is <code>column</code>, and vice versa) Should content be aligned at the start, the center, the end, or stretched to fill?</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.p}>
            The following example lets you try all the possible combinations of flexbox properties and layouts.
          </div>
          <WebPlayer files={files} />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
