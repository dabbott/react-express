import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})

AppRegistry.registerComponent('App', () => App)
`

export default class View extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            <code>Text</code> is used to render text. Unlike on the web, text <i>must</i> be wrapped in a <code>{'<Text>'}</code> component.
          </div>
          <WebPlayer code={code} />
        </div>
      </Page>
    )
  }
}
