import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}`

const content = markdown(markdownOptions)`
You've probably seen javascript functions bound to certain contexts with the \`bind()\` function. Binding is often used to ensure that a class's instance function is invoked with the correct context.

ES7 gives us a shorthand syntax to bind class instance functions to the context at the time they are defined. The \`printName\` function below is bound to current context at the time the class instance is created.

<EditorTranspiler
  code=${code}
  title=${'Bound instance methods'}
/>
`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={'http://gabegsell.com/'}
    />
    {content}
  </Page>
