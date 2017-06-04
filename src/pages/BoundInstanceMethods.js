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
When a function is assigned to a class instance property, that function is bound to the instance.

You've probably seen functions bound to class instances in the \`constructor\`, e.g. \`this.printName = this.printName.bind(this)\`. Binding here ensures that a class's instance function is invoked with the correct context.

With ES7 class instance properties, we can instead simply say \`printName = () => ...\`. The \`printName\` function below is bound to instance at the time the instance is constructed.

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
