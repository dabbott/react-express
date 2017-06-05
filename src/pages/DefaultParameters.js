import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorConsole, PageHeader } from '../components'

const code = `const printAnimal = (animal = 'cat') => {
  console.log(animal)
}
printAnimal() // cat
printAnimal('dog') // dog`

const content = markdown(markdownOptions)`
We can assign default values to function parameters within the function declaration. A default value is assigned to a parameter if it is \`undefined\`.

<EditorConsole
  code=${code}
  title=${'Default parameters'}
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
