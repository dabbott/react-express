import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

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
`;

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
`;

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
`;

const files = [
  ["index.js", indexFile],
  ["postsRedux.js", reduxFile],
  ["App.js", appFile]
];

const vendorComponents = [
  [
    "redux",
    "Redux",
    "https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js"
  ],
  [
    "react-redux",
    "ReactRedux",
    "https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.js"
  ],
  [
    "redux-thunk",
    "https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.1.0/redux-thunk.js"
  ]
];

const content = markdown(markdownOptions)`
By default, Redux only handles synchronous actions. However, there are some great middlewares (plugins) for handling asynchronous actions.

For small to medium apps, the [redux-thunk](https://github.com/gaearon/redux-thunk) middleware is extremely effective. It's also created by the author of redux, so it's pretty much guaranteed to be high-quality and up-to-date.

For large apps with very complex asynchronous chains of events, you may want to consider [redux-saga](https://github.com/yelouafi/redux-saga), which is an extremely powerful but mind-bendingly complex framework for managing flow control. You can think of sagas as background daemon processes, which you can fork and join, maintaining complete control over the asynchronous events in your app. These are also great for testability.

# Posts Example

Let's look at \`redux-thunk\` in action. We'll automatically fetch posts when the app starts, and provide a button to refresh them.

Thanks to Redux Thunk, we can now dispatch functions. When we dispatch a function, we must return a function that takes \`(dispatch, getState)\` as props. Using \`dispatch\`, our function can dispatch other actions. We can also view the current state of the store by calling \`getState()\`.

## Files

- \`index.js\`\\
This file handles creating the redux store and passing it to our \`Provider\`. It also handles applying the \`thunk\` middleware to our store, for handling asynchronous actions.

- \`postsRedux.js\`\\
This contains the actionCreators and reducer for fetching posts and updating the store.

- \`App.js\`\\
\`App\` is connected to the store using \`connect()\`. It pulls the post data, along with loading and error states, out of the redux store.

${<WebPlayer files={files} vendorComponents={vendorComponents} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
