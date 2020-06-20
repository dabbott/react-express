import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const keyedList = `import React, { Component } from 'react'
import { render } from 'react-dom'

const data = [
  {id: 'a', name: 'Devin'},
  {id: 'b', name: 'Gabe' },
  {id: 'c', name: 'Kim'},
]

class List extends Component {
  render() {
    return (
      <div>
        {data.map(item => <div key={item.id}>{item.name}</div>)}
      </div>
    )
  }
}

render(<List />, document.querySelector('#app'))
`;

const indexedList = `import React, { Component } from 'react'
import { render } from 'react-dom'

const data = [
  {name: 'Devin'},
  {name: 'Gabe' },
  {name: 'Kim'},
]

class List extends Component {
  render() {
    return (
      <div>
        {data.map((item, index) => <div key={index}>{item.name}</div>)}
      </div>
    )
  }
}

render(<List />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
Every React component can be passed a special prop called the \`key\`. React uses this \`key\` to determine the rendered element's identity. Understanding element identity is critical for performance and minimizing DOM manipulation: for example, if the first element in a list of thousands should no longer be rendered, React needs some way to detect this. Instead of re-rendering thousands of elements, React can simply remove a single DOM node for the first element, which is much more efficient.

# Key assignment

When rendering individual components (as opposed to lists of components) React automatically assigns keys to the elements based on their render order. Let's take a look at how this works. Let's suppose we return this snippet from a \`render\` function:

${(
  <pre>
    <code>{`(
  <div>
    <h1>Title</h1>
    <h2>Subtitle</h2>
  </div>
)`}</code>
  </pre>
)}

React needs to assign unique id's to each element in order to match them up between calls to \`render\`. The id's will look *something* like this:

${(
  <pre>
    <code>{`div: 0
  h1: 0.0
  h2: 0.1`}</code>
  </pre>
)}

By default, the id of an element is the id of its parent, concatenated with the index of the element within its parent. However, if we give one of these elements a key, that key will be used to determine the element's id. So for example:

${(
  <pre>
    <code>{`(
  <div>
    <h1 key={'title'}>Title</h1>
    <h2>Subtitle</h2>
  </div>
)`}</code>
  </pre>
)}

will result in something like:

${(
  <pre>
    <code>{`div: 0
  h1: 0.$title
  h2: 0.1`}</code>
  </pre>
)}

So, if you wanted to, you could assign a key to every element. You can even force a component to re-render by assigning a different key (this tells React that the element's identity has changed, thus triggering a re-render). But most of the time, you don't need to consider keys because React takes care of them automatically. It's likely the only time you'll need to use them is when rendering lists of elements.

# Lists

Let's consider the case of rendering a list of components by mapping an array of data.

${(
  <pre>
    <code>{`const data = [
  {id: 'a', name: 'Devin'},
  {id: 'b', name: 'Gabe' },
  {id: 'c', name: 'Kim'},
]

(
  <div>
    {data.map(item => <div>{item.name}</div>)}
  </div>
)`}</code>
  </pre>
)}

This \`data.map\` expression will evaluate to:

${(
  <pre>
    <code>{`(
  <div>
    {[
      <div>{'Devin'}</div>
      <div>{'Gabe'}</div>
      <div>{'Kim'}</div>
    ]}
  </div>
)`}</code>
  </pre>
)}

React makes the assumption that components in an array may at some point need to be rearranged due to insertions, deletions, etc. We need to provide keys to help React with this (and React will warn us if we don't).

If items in our data set have some sort of unique identity already, or we can derive something like that, that's the best thing to use. In this case, let's assume the \`id\` field is unique. We should set up our map like this:

${(
  <pre>
    <code>{`(
  <div>
    {data.map(item => <div key={item.id}>{item.name}</div>)}
  </div>
)`}</code>
  </pre>
)}

This will evaluate to:

${(
  <pre>
    <code>{`(
  <div>
    {[
      <div key={'a'}>{'Devin'}</div>
      <div key={'b'}>{'Gabe'}</div>
      <div key={'c'}>{'Kim'}</div>
    ]}
  </div>
)`}</code>
  </pre>
)}

Here's what it looks like in action:

${<WebPlayer code={keyedList} />}

# Using map index as \`key\`

If items in our data have no unique identifier of any kind, then we will generally resort to using the index of the item as its key. This silences the warning from React about forgetting to include keys, but remember that doing this will cause React to identify elements incorrectly if the data is modified: for example, if a new item is inserted at the front of the list, it will get \`key\` 0, which previously belonged to another item. So you may be better off assigning identifiers or indexes to your data set if you can.

Here's what this index approach looks like:

${(
  <pre>
    <code>{`(
  <div>
    {data.map((item, index) => <div key={index}>{item.name}</div>)}
  </div>
)`}</code>
  </pre>
)}

This will evaluate to:

${(
  <pre>
    <code>{`(
  <div>
    {[
      <div key={0}>{'Devin'}</div>
      <div key={1}>{'Gabe'}</div>
      <div key={2}>{'Kim'}</div>
    ]}
  </div>
)`}</code>
  </pre>
)}

Here's what it looks like in action:

${<WebPlayer code={indexedList} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
