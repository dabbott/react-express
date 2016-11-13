import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../../components'

const indexFile = `import { AppRegistry, View } from 'react-native'

// Import the App container component
import App from './App'

AppRegistry.registerComponent('App', () => App)
`

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
      todos: [...todos, text],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
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

const todoListFile = `import React, { Component } from 'react'
import { AppRegistry, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

  renderItem = (text, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(i)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})
`

const inputFile = `import React, { Component } from 'react'
import { AppRegistry, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state

    onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    const {onSubmitEditing, placeholder} = this.props
    const {text} = this.state

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
  },
})
`

const titleFile = `import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
})
`

const files = [
  ['index.js', indexFile],
  ['App.js', appFile],
  ['List.js', todoListFile],
  ['Input.js', inputFile],
  ['Title.js', titleFile],
]

export default class extends Component {
  render() {
    return (
      <Page title={'Component State'}>
        <div style={styles.well}>
          <div style={styles.h3}>Component State</div>
          <p>
            Storing data in the <code>state</code> of your components is great for small apps, and portions of an app which are isolated from the rest of the app.
          </p>
          <p>
            The best way to build components is generally to group them in two categories: <b>containers</b> and <b>components</b>.
          </p>
          <div style={styles.h4}>Smart/Container Components</div>
          <p>
            Container components are application-logic-specific components. They're usually just called "containers". You may also hear "smart" components, or occasionally, View-Controllers.
          </p>
          <p>
            Containers are aware of the data and logic unique to your application. Containers pass data and callbacks as props to "dumb" components, and handle updating the data when a user interacts with the app.
          </p>
          <div style={styles.h4}>Dumb Components</div>
          <p>
            Most components should not contain any business-logic. These "dumb" components could easily be used in a different app, since they are completely generic, and their only input is their <code>props</code>. These dumb components are often simply called "components".
          </p>
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
              <li><code>Title.js</code><br />A simple title component. Purely visual.<br /><br /></li>
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
