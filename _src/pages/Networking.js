import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const code = `import React, { Component } from 'react'
import { AppRegistry, View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'

class App extends Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  componentWillMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()

      this.setState({loading: false, posts})
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  renderPost = ({id, title, body}, i) => {
    return (
      <View
        key={id}
        style={styles.post}
      >
        <View style={styles.postNumber}>
          <Text>
            {i + 1}
          </Text>
        </View>
        <View style={styles.postContent}>
          <Text>
            {title}
          </Text>
          <Text style={styles.postBody}>
            {body}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    const {posts, loading, error} = this.state

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load posts!
          </Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        {posts.map(this.renderPost)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const content = markdown(markdownOptions)`
\`Networking\` in React Native is built on two APIs: \`fetch\` and \`XMLHttpRequest\`. Both of these were designed to be compatible with browser APIs so that:
- Web developers don't have to learn a new way to make network requests
- Libraries built on top of these function as expected in React Native

It's common to use the \`fetch\` API directly, since it's pretty simple and high-level. It's rare to use XMLHttpRequest directly, since it's complex and low-level. If your networking needs are advanced (multi-part form requests, etc), you'll likely want to use a library which abstracts the details of these networking APIs.

If you're looking for an abstraction layer, the common networking libraries like \`axios\` and \`superagent\` will still work in React Native.

# Fetch API

Let's take a look at \`fetch\`, since it's easy to use and comes with React Native out of the box. The Fetch API is promise-based, meaning we can use \`async/await\`.

## **\`const response = await fetch(uri)\`**

Send a \`GET\` request to \`uri\`, returning a promise which represents a \`Response\` object. To access the data returned, you must either await \`response.text()\` or \`response.json()\`.

## **\`const json = await response.json()\`**

Parse the body of the response asynchronously as JSON.

## **\`const text = await response.text()\`**

Get the body of the response as text.

## That's it!

We can get started using \`fetch\` with just that! If you want to use fetch with custom request headers or for \`POST\` requests, read more about the API [here at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

# Example

Here we'll fetch a list of posts and display them in a ScrollView. Since \`fetch\` is asynchronous, our app may not have data when it loads. We should be prepared to show an \`ActivityIndicator\` (spinner) while data loads. We should also be prepared to show an error message if fetching data fails.

*Note: fetch only works in Chrome and Firefox at the moment, so this example won't run in Safari or IE.*

${<WebPlayer title={"Networking with Fetch"} code={code} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
