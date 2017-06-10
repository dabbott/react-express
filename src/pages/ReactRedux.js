import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const indexFile = `import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './App'

// Pass the store into the Provider
const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(AppWithStore, document.querySelector('#app'))
`;

const appFile = `import React, { Component } from 'react'
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
      <div style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  ]
];

const content = markdown(markdownOptions)`
Redux has official bindings for React in a package called [React Redux](http://redux.js.org/docs/basics/UsageWithReact.html).

In the previous examples, we passed the \`store\` object directly into our container component as a prop. We then started listening to changes in \`componentWillMount\` with \`store.subscribe()\`, and we made sure to unsubscribe in \`componentWillUnmount\`. We dispatched actions with \`store.dispatch(action)\`.

There are a few issues with using Redux this way:

- Subscribing and unsubscribing to the store in our components is tedious and error-prone.
- Every container component will re-render on *every* change to the store, potentially becoming a performance issue.
- Using the store directly exposes the entire store API to our components; generally, components only need to be aware of the \`dispatch()\` API.

React Redux addresses these issues.

# React Redux API

## \`Provider\`

React Redux exposes the \`Provider\` component to handle passing our store to every container component. We'll generally use this to wrap the root component of our app, e.g. \`${`<Provider store={store}> ... </Provider>`}\`.

## \`connect(mapStateToProps)(Component) => Component\`

We use \`connect()\` to access the state of our \`store\` in our container components. Call \`connect(mapStateToProps)\` with a function that takes the state of the store, mapping it to \`props\` to be passed into our container component, \`(state) => props\`. Calling \`connect()\` returns <b>another function</b>, which we should then call with our container component, \`connect(...)(Component)\`, to get a "connected" component. This connected component will automatically have a \`dispatch\` prop (for dispatching actions), and the result of \`mapStateToProps\` will be merged into the component's props.

## That's enough to get started!

There are more APIs, and more parameters to the \`connect()\` function, but these are the ones you need to get going. Feel free to read more about React Redux in the [docs](http://redux.js.org/docs/basics/UsageWithReact.html).

# To-Do List Example

Let's take a look at our To-Do List app again, now that it's using React Redux.

## Files

- \`index.js\`\\
This file handles creating the redux store and passing it to our \`Provider\`. The \`Provider\` will let us connect our \`App\` container to the store with \`connect()\`.

- \`todoListRedux.js\`\\
The same as in the Redux example.

- \`App.js\`\\
\`App\` is connected to the store using \`connect()\`. It pulls the list data, \`todos\`, out of the store's state using \`mapStateToProps\`. It uses the \`dispatch()\` function added to its props to dispatch actions to modify the store.

- \`List.js\`, \`Input.js\`, \`Title.js\`\\
Presentational components - these are the same as in the Component State example.

${<WebPlayer files={files} vendorComponents={vendorComponents} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
