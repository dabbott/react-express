import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { EditorConsole, PageHeader } from '../components'

const code = `const cat = {
  name: 'Luna',
  friends: {best: 'Ellie'},
  legs: 4,
}
const strangeCat = {...cat, legs: 6}

const sameCat = {...cat}

console.log(cat.friends === sameCat.friends)

sameCat.friends.best = 'Buddy'

console.log(cat.friends.best)`

const content = markdown(markdownOptions)`
Similar to the array spread operator in ES6, ES7 offers a spread operator \`...\` for objects. This tries to use ES6's \`Object.assign\`, as you'll see when you view the babel output of the spread operator. This can be very useful in copying or copying and modifying objects.

We can copy an object simply with \`${"{...originalObj}"}\`. Note that this is a shallow copy. We can also extend an object with \`${"{...originalObj, key1: 'newValue'}"}\`.

<EditorConsole
  code=${code}
  title=${'Object spread operator'}
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
