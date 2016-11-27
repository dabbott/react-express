import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

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

export default class Classes extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'http://gabegsell.com/'}>
              Gabe G'Sell
            </Author>
          </div>
          <div style={styles.p}>
            In ES5, classes are just functions, with instance methods assigned to <code>MyFunction.prototype</code>. ES6 allows us to use the simpler <code>class</code> syntax.
          </div>
          <div style={styles.p}>
            <code>class</code> gives us built in instance functions, static functions, and inheritance. <code>constructor</code> is a special function that is called automatically every time a class instance is created. We can use the <code>static</code> keyword to declare static class functions.
          </div>
          <EditorTranspiler
            code={classExample}
            title={'Using class'}
          />
          <div style={styles.h4}>Inheritance</div>
          <div style={styles.p}>
            The <code>class</code> gives us simple inheritance with the keyword <code>extends</code>. In classes that inherit from parents, we have access to a function <code>super()</code>. Within an inherited function in that child class, <code>super</code> will invoke the parent class's version of that function.
          </div>
          <EditorTranspiler
            code={classExtendsExample}
            title={'Inheritance'}
          />
          <div style={styles.p}>
            For full details on the <code>class</code> syntax, see the MDN reference for <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'}>class</a>.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
