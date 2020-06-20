import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

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
`;

const files = [
  ["index.js", indexFile],
  ["Input.js", require("!!raw-loader!../examples/Input")]
];

const content = markdown(markdownOptions)`
\`AsyncStorage\` is a built-in React Native API for client-side data persistence. Here we'll cover basic usage of the API; as your data gets complex, you will likely want to use a library built on top of \`AsyncStorage\`, such as Redux Persist.

# API

The AsyncStorage API is promise-based. All getting and setting of key-value pairs is asynchronous. Thanks to the new \`async/await\`, interacting with the API isn't much more difficult than if it were synchronous.

## **\`await getItem(key) => ?string\`**

Get the \`value\` stored at \`key\`. This will return a string, or null if no data has been stored yet for that \`key\`. Don't forget to call \`JSON.parse(value)\` if you're storing your data in JSON format.

## **\`await setItem(key, value)\`**

Store \`value\` at \`key\`. Don't forget to call \`JSON.stringify(value)\` if you're storing your data in JSON format.

## **\`await clear()\`**

Clear all stored data.

## That's it!

These three APIs are frequently all you'll need. There are a few more APIs worth being aware of, in case you end up using AsyncStorage for more complex things:

- \`removeItem(key)\`
- \`mergeItem(key, value)\`
- \`getAllKeys() => {'?Array<string>'}\`
- \`flushGetRequests()\`
- \`multiGet(keys) => {'?Array<Array<string>>'}\`
- \`multiSet(keyValuePairs)\`
- \`multiRemove(keys)\`
- \`multiMerge(keyValuePairs)\`

Don't forget, all of these functions (including \`getItem\` and \`setItem\`) can throw errors upon failure which you'll want to handle!

# Example

Let's look at an example of getting and setting a key-value pair in \`AsyncStorage\`.

## Files

- \`index.js\`\\
The \`App\` component loads the value at \`STORAGE_KEY\` into \`this.state\` when it mounts. Every time you type your name in the input field and hit enter, we save \`name\` to \`STORAGE_KEY\`, as well as updating the value in \`this.state\`. Note that we also catch errors thrown when loading/saving, which is simple thanks to \`async/await\`.

- \`Input.js\`\\
Presentational component

${<WebPlayer files={files} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
