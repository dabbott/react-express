import React, { Component } from 'react';
import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const defaultParamExample = `const printAnimal = (animal = 'cat') => {
  console.log(animal)
}
printAnimal() // cat`

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

const dynamicObjectKeysExample = `const chosenAnimal = 'cat'
const animals = {
  [\`animal\${chosenAnimal}\`]: true,
}
console.log(animals.animalcat) // true`

const arraySpreadExample = `const animals = ['cat', 'dog', 'moose']
const newAnimals = [...animals]
const lotsOfAnimals = [...animals, 'bear', 'mouse', 'donkey']

const fruits = [{name: 'banana', color: 'yellow'}, {name: 'apple', color: 'red'}]
const newFruits = [...fruits]
console.log(fruits[0] === newFruits[0]) // true
newFruits[0].name = 'fofana'
console.log(fruits[0].name) // fofana`


export default class ES6Continued extends Component {
  render() {
    return (
      <Page title={'ES6 Continued'}>
        <div style={styles.well}>
          <div style={styles.h3}>ES6 Continued</div>
          <div style={styles.p}>
            Let's look at some more useful features that ES6 makes available for us.
          </div>
          <div style={styles.h4}>Default parameters:</div>
          <div style={styles.p}>
            We can assign default values to function parameters within the function declaration. A default value is assigned to a parameter if it is <code>undefined</code>.
          </div>
          <EditorTranspiler
            code={defaultParamExample}
            title={'Default parameters'}
          />
          <div style={styles.h4}>Classes</div>
          <div style={styles.p}>
            In ES5, classes are just functions, with instance methods declared this way: <code>Test.prototype.myFunction</code>. ES6 allows us to use the simpler <code>class</code> syntax.
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
            <code>class</code> also makes inheritance extremely easy with the keyword <code>extends</code>. You can extend an existing class to inherit from it.
          </div>
          <div style={styles.p}>
            In classes that inherit from parents, we have access to a function <code>super()</code>. Within an inherited function in that child class, <code>super</code> will invoke the parent class's version of that function.
          </div>
          <EditorTranspiler
            code={classExtendsExample}
            title={'Inheritance'}
          />
          <div style={styles.p}>
            For full details on the <code>class</code> syntax, see the MDN reference for <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'}>class</a>.
          </div>
          <div style={styles.h4}>Dynamic object keys</div>
          <div style={styles.p}>
            In ES5, object literal keys are always interpreted as a string. ES6 allows us to use computed values as keys in object literals, using square bracket syntax: <code>[myKey]</code>
          </div>
          <EditorTranspiler
            code={dynamicObjectKeysExample}
            title={'Dynamic object keys'}
          />
          <div style={styles.h4}>Array spread operator</div>
          <div style={styles.p}>
            The array spread operator makes it easy to expand an array. This can be used to make a shallow copy of an array and can be useful in modifying or expanding these copies.
          </div>
          <EditorTranspiler
            code={arraySpreadExample}
            title={'Array spread operator'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
