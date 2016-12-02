import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const minimalRedux = `import { AppRegistry, Text } from 'react-native'
import { createStore } from 'redux'

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  }
  return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)


/// We're done! Redux is all set up. Here's how we can use it:


// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

// Calling \`store.getState()\` returns our state object
const App = () => (
  <Text style={{fontSize: 100}}>
    {store.getState().count}
  </Text>
)

AppRegistry.registerComponent('App', () => App)
`

const indexFile = `import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './App'

// Pass the store into the app container
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('App', () => AppWithStore)
`

const appFile = `import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {}

  componentWillMount() {
    const {store} = this.props

    const {todos} = store.getState()
    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    const {store} = this.props

    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {store} = this.props

    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.state

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
`

const files = [
  ['index.js', indexFile],
  ['todoListRedux.js', require('!!raw!../examples/TodoListRedux')],
  ['App.js', appFile],
  ['List.js', require('!!raw!../examples/List')],
  ['Input.js', require('!!raw!../examples/Input')],
  ['Title.js', require('!!raw!../examples/Title')],
]

const vendorComponents = [
  ['redux', 'Redux', 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js'],
]

export default class extends Component {
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
            Most medium and large React Native apps use Redux for managing data and state throughout the application. Redux is a fairly expansive topic, so we'll just cover basic usage with React Native here, leaving more advanced usage to the <a href={"http://redux.js.org/"}>Redux docs</a>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Redux Architecture</div>
          <div style={styles.h4_monospace}>store</div>
          <div style={styles.p}>
            An application will create a single Redux <code>store</code> to hold <i>all</i> data and state. We can view the state of the store by calling <code>store.getState()</code>. The store's state should never be modified directly; instead, we call <code>store.dispatch(action)</code> to dispatch actions into the store.
          </div>
          <div style={styles.h4_monospace}>action</div>
          <div style={styles.p}>
            <code>action</code>s should be plain objects containing a <code>type</code> field, e.g. <code>{`{type: 'INCREMENT'}`}</code>. You can define any types you want. You may also include other fields in the <code>action</code> object. By convention, we often pass extra data in a <code>payload</code> field, e.g. <code>{`{type: 'SET_VALUE', payload: 42}`}</code>. Read more about <code>action</code> conventions here: <a href={'https://github.com/acdlite/flux-standard-action'}>Flux Standard Actions</a>.
          </div>
          <div style={styles.h4_monospace}>reducer</div>
          <div style={styles.p}>
            You then define a function to handle <code>action</code>s, and update the <code>store</code> accordingly. You can choose how to update the state depending on which <code>type</code> of action your <code>reducer</code> function receives. Redux will pass this function the current state of the store, and the action you dispatched, expecting an updated state object to be returned: <code>(state, action) => newState</code>. We call this function a <code>reducer</code> function.
          </div>
          <div style={styles.h4}>That's it!</div>
          <div style={styles.p}>
            There are a lot of new terms, but it's actually not that complicated once you start using it. We'll look at two examples: an extremely minimal (contrived) example, and then the same To-Do list app from the Component State example.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Minimal Example</div>
          <div style={styles.p}>
            This example shows the bare minimum steps necessary to set up a redux <code>store</code>, define <code>action</code> types, and define a <code>reducer</code> function to handle them.
          </div>
          <WebPlayer
            code={minimalRedux}
            vendorComponents={vendorComponents}
          />
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>To-Do List Example</div>
          <div style={styles.p}>
            Let's take a look at our To-Do List app again, now that it's using Redux.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />This file handles creating the redux store and passing it to our <code>App</code> container.<br /><br /></li>
              <li><code>todoListRedux.js</code><br />Defines the action types, the reducer function, and <code>actionCreators</code> helper functions to create actions. Note that we also moved <code>initialState</code> into this file (redux allows you to either pass it into your store on creation, or return it from your reducer).<br /><br /></li>
              <li><code>App.js</code><br /><code>App</code> is a "smart" container component. It is aware of our application's state and can fire actions to update the state, using the helper functions we defined in <code>actionCreators</code>. The container subscribes to the store, updating its own state and the props of its children whenever the store's state changes in response to an action.<br /><br /></li>
              <li><code>List.js</code>, <code>Input.js</code>, <code>Title.js</code><br />Presentational components - these are the same as in the Component State example.<br /><br /></li>
            </ul>
          </div>
          <WebPlayer
            files={files}
            vendorComponents={vendorComponents}
          />
        </div>
      </Page>
    )
  }
}
