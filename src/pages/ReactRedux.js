import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

const indexFile = `import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

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
  ['react-redux', 'ReactRedux', 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.min.js'],
]

export default class extends Component {
  render() {
    return (
      <Page footer={this.props.footer} title={'React Redux'}>
        <div style={styles.well}>
          <div style={styles.h3}>React Redux</div>
          <div style={styles.p}>
            Redux has official bindings for React in a package called <a href={"http://redux.js.org/docs/basics/UsageWithReact.html"}>React Redux</a>.
          </div>
          <div style={styles.p}>
            In the previous examples, we passed the <code>store</code> object directly into our container component as a prop. We then started listening to changes in <code>componentWillMount</code> with <code>store.subscribe()</code>, and we made sure to unsubscribe in <code>componentWillUnmount</code>. We dispatched actions with <code>store.dispatch(action)</code>.
          </div>
          <div style={styles.p}>
            There are a few issues with using Redux this way:
            <ul>
              <li>Subscribing and unsubscribing to the store in our components is tedious and error-prone.</li>
              <li>Every container component will re-render on <i>every</i> change to the store, potentially becoming a performance issue.</li>
              <li>Using the store directly exposes the entire store API to our components; generally, components only need to be aware of the <code>dispatch()</code> API.</li>
            </ul>
          </div>
          <div style={styles.p}>
            React Redux addresses these issues.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>React Redux API</div>
          <div style={styles.h4}><code>Provider</code></div>
          <div style={styles.p}>
            React Redux exposes the <code>Provider</code> component to handle passing our store to every container component. We'll generally use this to wrap the root component of our app, e.g. <code>{`<Provider store={store}> ... </Provider>`}</code>.
          </div>
          <div style={styles.h4}><code>connect(mapStateToProps)(Component) => Component</code></div>
          <div style={styles.p}>
            We use <code>connect()</code> to access the state of our <code>store</code> in our container components. Call <code>connect(mapStateToProps)</code> with a function that takes the state of the store, mapping it to <code>props</code> to be passed into our container component, <code>(state) => props</code>. Calling <code>connect()</code> returns <b>another function</b>, which we should then call with our container component, <code>connect(...)(Component)</code>, to get a "connected" component. This connected component will automatically have a <code>dispatch</code> prop (for dispatching actions), and the result of <code>mapStateToProps</code> will be merged into the component's props.
          </div>
          <div style={styles.h4}>That's enough to get started!</div>
          <div style={styles.p}>
            There are more APIs, and more parameters to the <code>connect()</code> function, but these are the ones you need to get going. Feel free to read more about React Redux in the <a href={"http://redux.js.org/docs/basics/UsageWithReact.html"}>docs</a>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>To-Do List Example</div>
          <div style={styles.p}>
            Let's take a look at our To-Do List app again, now that it's using React Redux.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />This file handles creating the redux store and passing it to our <code>Provider</code>. The <code>Provider</code> will let us connect our <code>App</code> container to the store with <code>connect()</code>.<br /><br /></li>
              <li><code>todoListRedux.js</code><br />The same as in the Redux example.<br /><br /></li>
              <li><code>App.js</code><br /><code>App</code> is connected to the store using <code>connect()</code>. It pulls the list data, <code>todos</code>, out of the store's state using <code>mapStateToProps</code>. It uses the <code>dispatch()</code> function added to its props to dispatch actions to modify the store.<br /><br /></li>
              <li><code>List.js</code>, <code>Input.js</code>, <code>Title.js</code><br />Presentational components - these are the same as in the Component State example.<br /><br /></li>
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
