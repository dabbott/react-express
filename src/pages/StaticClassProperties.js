import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorConsole, PageHeader } from '../components'

const code = `class Cat {
  static legCount = 4
}

console.log(Cat.legCount)`

const content = markdown(markdownOptions)`
As we saw in our ES6 section, static functions on classes exist as a part of ES6. In ES7, we can use the \`static\` keyword to declare static properties as well.

<EditorConsole
  code=${code}
  title=${'Static properties'}
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
