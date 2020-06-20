import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const indexFile = `import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

// Import the reducer and create a store
import { reducer } from './todoListRedux'

// Add the autoRehydrate middleware to your redux store
const store = createStore(reducer, undefined, autoRehydrate())

// Enable persistence
persistStore(store)

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

const appFile = `import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
`;

const files = [
  ["index.js", indexFile],
  ["todoListRedux.js", require("!!raw-loader!../examples/TodoListRedux")],
  ["App.js", appFile],
  ["List.js", require("!!raw-loader!../examples/List")],
  ["Input.js", require("!!raw-loader!../examples/Input")],
  ["Title.js", require("!!raw-loader!../examples/Title")]
];

const vendorComponents = [
  [
    "redux",
    "Redux",
    "https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js"
  ],
  [
    "react-redux",
    "ReactRedux",
    "https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.min.js"
  ],
  [
    "redux-persist",
    "redux-persist",
    "https://cdnjs.cloudflare.com/ajax/libs/redux-persist/4.0.0-alpha7/redux-persist.js"
  ]
];

const content = markdown(markdownOptions)`
Redux Persist is an extremely simple way to persist your entire redux store to disk, and load it into memory when the app launches again. Redux Persist is an abstraction layer on top of <code>AsyncStorage</code>. You can read more about Redux Persist in the [docs](https://github.com/rt2zz/redux-persist).

${<WebPlayer files={files} vendorComponents={vendorComponents} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
