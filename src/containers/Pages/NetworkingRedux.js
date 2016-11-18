import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../../components'

const indexFile = `import { AppRegistry, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './postsRedux'

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk))

// Import the App container component
import App from './App'

// Pass the store into the Provider
const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('App', () => AppWithStore)
`

const reduxFile = `export const types = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_RESPONSE: 'FETCH_POSTS_RESPONSE',
  CLEAR_POSTS: 'CLEAR_POSTS',
}

export const actionCreators = {
  fetchPosts: () => async (dispatch, getState) => {
    dispatch({type: types.FETCH_POSTS_REQUEST})

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()

      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: posts})
    } catch (e) {
      dispatch({type: types.FETCH_POSTS_RESPONSE, payload: e, error: true})
    }
  },

  // It's common for action creators to return a promise for easy chaining,
  // which is why this is declared async (async functions always return promises).
  clearPosts: () => async (dispatch, getState) => {
    if (getState().posts.length > 0) {
      dispatch({type: types.CLEAR_POSTS})
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  posts: [],
}

export const reducer = (state = initialState, action) => {
  const {todos} = state
  const {type, payload, error} = action

  switch (type) {
    case types.FETCH_POSTS_REQUEST: {
      return {...state, loading: true, error: false}
    }
    case types.FETCH_POSTS_RESPONSE: {
      if (error) {
        return {...state, loading: false, error: true}
      }

      return {...state, loading: false, posts: payload}
    }
  }

  return state
}
`

const appFile = `import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './postsRedux'

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  posts: state.posts,
})

class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props

    dispatch(actionCreators.fetchPosts())
  }

  refresh = async () => {
    const {dispatch} = this.props

    // We can await the completion of dispatch, so long as we returned a promise.
    await dispatch(actionCreators.clearPosts())

    dispatch(actionCreators.fetchPosts())
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
    const {posts, loading, error} = this.props

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
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {posts.map(this.renderPost)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={this.refresh}
        >
          <Text>
            Refresh
          </Text>
        </TouchableOpacity>
      </View>
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
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  }
})

export default connect(mapStateToProps)(App)
`

const files = [
  ['index.js', indexFile],
  ['postsRedux.js', reduxFile],
  ['App.js', appFile],
]

const vendorComponents = [
  ['redux', 'Redux', 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js'],
  ['react-redux', 'ReactRedux', 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.js'],
  ['redux-thunk', 'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.js'],
]

export default class extends Component {
  render() {
    return (
      <Page title={'Networking with Redux'}>
        <div style={styles.well}>
          <div style={styles.p}>
            By default, Redux only handles synchronous actions. However, there are some great middlewares (plugins) for handling asynchronous actions.
          </div>
          <div style={styles.p}>
            For small to medium apps, the <a href={'https://github.com/gaearon/redux-thunk'}>redux-thunk</a> middleware is extremely effective. It's also created by the author of redux, so it's pretty much guaranteed to be high-quality and up-to-date.
          </div>
          <div style={styles.p}>
            For large apps with very complex asynchronous chains of events, you may want to consider <a href={'https://github.com/yelouafi/redux-saga'}>redux-saga</a>, which is an extremely powerful but mind-bendingly complex framework for managing flow control. You can think of sagas as background daemon processes, which you can fork and join, maintaining complete control over the asynchronous events in your app. These are also great for testability.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Posts Example</div>
          <div style={styles.p}>
            Let's look at <code>redux-thunk</code> in action. We'll automatically fetch posts when the app starts, and provide a button to refresh them.
          </div>
          <div style={styles.p}>
            Thanks to Redux Thunk, we can now dispatch functions. When we dispatch a function, we must return a function that takes <code>(dispatch, getState)</code> as props. Using <code>dispatch</code>, our function can dispatch other actions. We can also view the current state of the store by calling <code>getState()</code>.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />This file handles creating the redux store and passing it to our <code>Provider</code>. It also handles applying the <code>thunk</code> middleware to our store, for handling asynchronous actions.<br /><br /></li>
              <li><code>postsRedux.js</code><br />This contains the actionCreators and reducer for fetching posts and updating the store.<br /><br /></li>
              <li><code>App.js</code><br /><code>App</code> is connected to the store using <code>connect()</code>. It pulls the post data, along with loading and error states, out of the redux store.<br /><br /></li>
            </ul>
          </div>
          <WebPlayer
            files={files}
            vendorComponents={vendorComponents}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
