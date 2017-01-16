import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const taskRunner = async () => {
  try {
    const firstValue = await asyncTask1()
    const secondValue = await asyncTask2(firstValue)
  } catch(e) {
    console.error("Something went wrong! Caught exception:", e)
  }
}`

const content = markdown(markdownOptions)`
ES7 gives us \`async\` functions that can use the \`await\` keyword to simplify asynchronous logic and readability. If a function is declared \`async\`, \`await\` will block code execution until the asynchronous operation is completed or fails.

This syntax also makes it easy to catch exceptions by surrounding \`await\` with a \`try\`/\`catch\` block.

<EditorTranspiler
  code=${code}
  title=${'Async and await'}
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
