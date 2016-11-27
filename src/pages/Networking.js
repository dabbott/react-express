import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

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
          {i + 1}
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
`

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Networking</div>
          <div style={styles.p}>
            <code>Networking</code> in React Native is built on two APIs: <code>fetch</code> and <code>XMLHttpRequest</code>. Both of these were designed to be compatible with browser APIs so that:
          </div>
          <ol>
            <li>Web developers don't have to learn a new way to make network requests</li>
            <li>Libraries built on top of these function as expected in React Native</li>
          </ol>
          <div style={styles.p}>
            It's common to use the <code>fetch</code> API directly, since it's pretty simple and high-level. It's rare to use XMLHttpRequest directly, since it's complex and low-level. If your networking needs are advanced (multi-part form requests, etc), you'll likely want to use a library which abstracts the details of these networking APIs.
          </div>
          <div style={styles.p}>
            If you're looking for an abstraction layer, the common networking libraries like <code>axios</code> and <code>superagent</code> will still work in React Native.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Fetch API</div>
          <div style={styles.p}>
            Let's take a look at <code>fetch</code>, since it's easy to use and comes with React Native out of the box. The Fetch API is promise-based, meaning we can use <code>async/await</code>.
          </div>
          <div style={styles.h4_monospace}>const response = await fetch(uri)</div>
          <div style={styles.p}>
            Send a <code>GET</code> request to <code>uri</code>, returning a promise which represents a <code>Response</code> object. To access the data returned, you must either await <code>response.text()</code> or <code>response.json()</code>.
          </div>
          <div style={styles.h4_monospace}>const json = await response.json()</div>
          <div style={styles.p}>
            Parse the body of the response asynchronously as JSON.
          </div>
          <div style={styles.h4_monospace}>const json = await response.json()</div>
          <div style={styles.p}>
            Get the body of the response as text.
          </div>
          <div style={styles.h4}>That's it!</div>
          <div style={styles.p}>
            We can get started using <code>fetch</code> with just that! If you want to use fetch with custom request headers or for <code>POST</code> requests, read more about the API <a href={'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'}>here at MDN</a>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <div style={styles.p}>
            Here we'll fetch a list of posts and display them in a ScrollView. Since <code>fetch</code> is asynchronous, our app may not have data when it loads. We should be prepared to show an <code>ActivityIndicator</code> (spinner) while data loads. We should also be prepared to show an error message if fetching data fails.
          </div>
          <div style={styles.p}>
            <i>Note: fetch only works in Chrome and Firefox at the moment, so this example won't run in Safari or IE.</i>
          </div>
          <WebPlayer
            title={'Networking with Fetch'}
            code={code}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
