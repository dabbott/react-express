import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

const indexFile = `import React, { Component } from 'react'
import { AppRegistry, View, Text, AsyncStorage, StyleSheet } from 'react-native'

import Input from './Input'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

class App extends Component {

  state = {name: 'World'}

  componentWillMount() {
    this.load()
  }

  load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)

      if (name !== null) {
        this.setState({name})
      }
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  save = async (name) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)

      this.setState({name})
    } catch (e) {
      console.error('Failed to save name.')
    }
  }

  render() {
    const {name} = this.state

    return (
      <View>
        <Input
          placeholder={'Type your name, hit enter, and refresh!'}
          onSubmitEditing={this.save}
        />
        <Text style={styles.text}>
          Hello {name}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`

const files = [
  ['index.js', indexFile],
  ['Input.js', require('!!raw!../examples/Input')],
]

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>AsyncStorage</div>
          <div style={styles.p}>
            <code>AsyncStorage</code> is a built-in React Native API for client-side data persistence. Here we'll cover basic usage of the API; as your data gets complex, you will likely want to use a library built on top of <code>AsyncStorage</code>, such as Redux Persist.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>API</div>
          <div style={styles.p}>
            The AsyncStorage API is promise-based. All getting and setting of key-value pairs is asynchronous. Thanks to the new <code>async/await</code>, interacting with the API isn't much more difficult than if it were synchronous.
          </div>
          <div style={styles.h4_monospace}>await getItem(key) => ?string</div>
          <div style={styles.p}>
            Get the <code>value</code> stored at <code>key</code>. This will return a string, or null if no data has been stored yet for that <code>key</code>. Don't forget to call <code>JSON.parse(value)</code> if you're storing your data in JSON format.
          </div>
          <div style={styles.h4_monospace}>await setItem(key, value)</div>
          <div style={styles.p}>
            Store <code>value</code> at <code>key</code>. Don't forget to call <code>JSON.stringify(value)</code> if you're storing your data in JSON format.
          </div>
          <div style={styles.h4_monospace}>await clear()</div>
          <div style={styles.p}>
            Clear all stored data.
          </div>
          <div style={styles.h4}>That's it!</div>
          <div style={styles.p}>
            These three APIs are frequently all you'll need. There are a few more APIs worth being aware of, in case you end up using AsyncStorage for more complex things:
          </div>
          <ul>
            <li><code>removeItem(key)</code></li>
            <li><code>mergeItem(key, value)</code></li>
            <li><code>getAllKeys() => {'?Array<string>'}</code></li>
            <li><code>flushGetRequests()</code></li>
            <li><code>multiGet(keys) => {'?Array<Array<string>>'}</code></li>
            <li><code>multiSet(keyValuePairs)</code></li>
            <li><code>multiRemove(keys)</code></li>
            <li><code>multiMerge(keyValuePairs)</code></li>
          </ul>
          <div style={styles.p}>
            Don't forget, all of these functions (including <code>getItem</code> and <code>setItem</code>) can throw errors upon failure which you'll want to handle!
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <div style={styles.p}>
            Let's look at an example of getting and setting a key-value pair in <code>AsyncStorage</code>.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />The <code>App</code> component loads the value at <code>STORAGE_KEY</code> into <code>this.state</code> when it mounts. Every time you type your name in the input field and hit enter, we save <code>name</code> to <code>STORAGE_KEY</code>, as well as updating the value in <code>this.state</code>. Note that we also catch errors thrown when loading/saving, which is simple thanks to <code>async/await</code>.<br /><br /></li>
              <li><code>Input.js</code><br />Presentational component<br /><br /></li>
            </ul>
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
