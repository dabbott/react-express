import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { WebPlayer } from '../components'

const inputField = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Input extends Component {

  state = {value: ''}

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    const {value} = this.state

    return (
      <div>
        <input
          type={'text'}
          value={value}
          placeholder={'Placeholder'}
          onChange={this.handleChange}
        />
        <br />
        <br />
        My value: {value}
      </div>
    )
  }
}

render(<Input />, document.querySelector('#app'))
`

const content = markdown(markdownOptions)`
Traditionally in web development, user input is stored in the DOM, and the data (e.g. what the user typed in the input field) is extracted from the DOM to use in the application logic. React dramatically simplifies input handling by treating input elements as stateless; an input element has a \`value\` prop and an \`onChange\` prop, and together these things give you total control over the input without ever having to touch the DOM.

# Input field

Let's look at a simple input field:

<WebPlayer code=${inputField} />
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
