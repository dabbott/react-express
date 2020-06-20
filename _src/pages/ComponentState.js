import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const appFile = `import React, { Component } from 'react'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {
    todos: ['Click to remove', 'Learn React', 'Write Code', 'Ship App'],
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
  }
}
`;

const files = [
  ["index.js", require("!!raw-loader!../examples/IndexRegisterApp")],
  ["App.js", appFile],
  ["List.js", require("!!raw-loader!../examples/List")],
  ["Input.js", require("!!raw-loader!../examples/Input")],
  ["Title.js", require("!!raw-loader!../examples/Title")]
];

const content = markdown(markdownOptions)`
Storing data in the \`state\` of your components is great for small apps, and portions of an app which are isolated from the rest of the app.

The best way to build components is generally to group them in two categories: <b>containers</b> and <b>components</b>.

## Smart/Container Components

Container components are application-logic-specific components. They're usually just called "containers". You may also hear "smart" components, or occasionally, View-Controllers.

Containers are aware of the data and logic unique to your application. Containers pass data and callbacks as props to presentational components, and handle updating the data when a user interacts with the app.

## Presentational/Dumb Components

Most components should not contain any business-logic. These presentational components could easily be used in a different app, since they are completely generic, and their only input is their \`props\`. Presentational components are often simply called "components".

# Example

Let's take a look at a To-Do List app.

This app has 1 container, \`App\`, and 3 components: \`List\`, \`Input\`, and \`Title\`. Generally, each container and component should live in a separate file, and should be the \`default\` export of that file. We give the file the same name as the component, e.g. a component called \`Input\` should live in \`Input.js\`.

## Files

- \`index.js\`\\
The index file is the entry point to a project. This is the entry point for the JavaScript bundle and will \`render\` the root component into the DOM. The index commonly contains or \`require\`s setup code for the project.

- \`App.js\`\\
\`App\` is a "smart" container component, containing the To-Do list data and logic for adding/removing items. \`App\` renders the \`List\`, \`Input\`, and \`Title\` components, passing To-Do list data and callbacks for modifying the list.

- \`List.js\`\\
This component renders a list of strings. It fires an \`onClickItem\` callback when an item is pressed.

- \`Input.js\`\\
This component renders an input field. It maintains the current input in its state, and then fires a callback, \`onSubmitEditing\` when the user presses ${(
  <kbd>Enter</kbd>
)}.

- \`Title.js\`\\
A simple title component. Purely presentational.

${<WebPlayer files={files} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
