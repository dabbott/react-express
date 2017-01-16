import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const code = `const chosenAnimal = 'cat'
const animals = {
  [\`animal\${chosenAnimal}\`]: true,
}
console.log(animals.animalcat) // true`

const content = markdown(markdownOptions)`
In ES5, object literal keys are always interpreted as a string. ES6 allows us to use computed values as keys in object literals, using square bracket syntax: \`[myKey]\`.

<EditorTranspiler
  code=${code}
  title=${'Dynamic object keys'}
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
