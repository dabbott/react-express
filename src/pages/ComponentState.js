import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

const appFile = `import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
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
  ['index.js', require('!!raw!../examples/IndexRegisterApp')],
  ['App.js', appFile],
  ['List.js', require('!!raw!../examples/List')],
  ['Input.js', require('!!raw!../examples/Input')],
  ['Title.js', require('!!raw!../examples/Title')],
]

export default class extends Component {
  render() {
    return (
      <Page title={'Component State'}>
        <div style={styles.well}>
          <div style={styles.h3}>Component State</div>
          <div style={styles.p}>
            Storing data in the <code>state</code> of your components is great for small apps, and portions of an app which are isolated from the rest of the app.
          </div>
          <div style={styles.p}>
            The best way to build components is generally to group them in two categories: <b>containers</b> and <b>components</b>.
          </div>
          <div style={styles.h4}>Smart/Container Components</div>
          <div style={styles.p}>
            Container components are application-logic-specific components. They're usually just called "containers". You may also hear "smart" components, or occasionally, View-Controllers.
          </div>
          <div style={styles.p}>
            Containers are aware of the data and logic unique to your application. Containers pass data and callbacks as props to presentational components, and handle updating the data when a user interacts with the app.
          </div>
          <div style={styles.h4}>Presentational/Dumb Components</div>
          <div style={styles.p}>
            Most components should not contain any business-logic. These presentational components could easily be used in a different app, since they are completely generic, and their only input is their <code>props</code>. Presentational components are often simply called "components".
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <div style={styles.p}>
            Let's take a look at a To-Do List app.
          </div>
          <div style={styles.p}>
            This app has 1 container, <code>App</code>, and 3 components: <code>List</code>, <code>Input</code>, and <code>Title</code>. Generally, each container and component should live in a separate file, and should be the <code>default</code> export of that file. We give the file the same name as the component, e.g. a component called <code>Input</code> should live in <code>Input.js</code>. In React Native, component names <i>must</i> be capitalized, so the file name will usually be capitalized too.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />The index file is the entry point to a project. This file is run automatically when the project starts, and is responsible for registering an app with <code>AppRegistry.registerComponent</code>. The index commonly contains or <code>require</code>s setup code for the project.<br /><br /></li>
              <li><code>App.js</code><br /><code>App</code> is a "smart" container component, containing the To-Do list data and logic for adding/removing items. <code>App</code> renders the <code>List</code>, <code>Input</code>, and <code>Title</code> components, passing To-Do list data and callbacks for modifying the list.<br /><br /></li>
              <li><code>List.js</code><br />This component renders a list of strings. It fires an <code>onPressItem</code> callback when an item is pressed.<br /><br /></li>
              <li><code>Input.js</code><br />This component renders an input field. It maintains the current input in its state, and then fires a callback, <code>onSubmitEditing</code> when the user presses Submit.<br /><br /></li>
              <li><code>Title.js</code><br />A simple title component. Purely presentational.<br /><br /></li>
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
