import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorConsole } from '../components'

const code = `class Cat {
  name = 'Tom'
  state = {
    running: true
  }

  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat()
`

const content = markdown(markdownOptions)`
Class instance properties are a convenient way to declare properties for each instance, equivalent to assigning these properties in the constructor function.

<EditorConsole
  code=${code}
  title=${'Class instance properties'}
  height={400}
/>
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
