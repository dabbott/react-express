import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import Page from './Page'
import { EditorTranspiler, PageHeader } from '../components'

const classExample = `class Animal {
  constructor(name) {
    this.name = name
  }

  static beProud() {
    console.log('I AM AN ANIMAL')
  }

  printName() {
    console.log(this.name)
  }
}

const animal = new Animal('Cat')
animal.printName() // Cat
Animal.beProud() // I AM AN ANIMAL`

const classExtendsExample = `class Cat extends Animal {
  printName() {
    super.printName()
    console.log(\`My name is \${this.name}\`)
  }
}`

const content = markdown(markdownOptions)`
In ES5, classes are just functions, with instance methods assigned to \`MyFunction.prototype\`. ES6 allows us to use the simpler \`class\` syntax.

\`class\` gives us built in instance functions, static functions, and inheritance. \`constructor\` is a special function that is called automatically every time a class instance is created. We can use the \`static\` keyword to declare static class functions.

<EditorTranspiler
  code=${classExample}
  title=${'Using class'}
/>

# Inheritance

The \`class\` gives us simple inheritance with the keyword \`extends\`. In classes that inherit from parents, we have access to a function \`super()\`. Within an inherited function in that child class, \`super\` will invoke the parent class's version of that function.

<EditorTranspiler
  code=${classExtendsExample}
  title=${'Inheritance'}
/>

For full details on the \`class\` syntax, see the MDN reference for [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes').
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
