import React, { Component } from 'react';
import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const staticPropertyExample = `class Cat {
  static legCount = 4
}
console.log(Cat.legCount) // 4`

const boundInstanceMethodsExample = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}`

const objectSpreadExample = `const cat = {
  name: 'Luna',
  friends: {best: 'Ellie'},
  legs: 4,
}
const strangeCat = {...animal, legs: 6}

const sameCat = {...animal}
console.log(cat.friends === sameCat.friends) // true
sameCat.friends.best = 'Buddy'
console.log(cat.friends.best) // Buddy`

const asyncAwaitExample = `const taskRunner = async () => {
  try {
    const firstValue = await asyncTask1()
    const secondValue = await asyncTast2(firstValue)
  } catch(e) {
    console.error("Something went wrong! Caught exception:", e)
  }
}`


export default class ES7AndBeyond extends Component {
  render() {
    return (
      <Page footer={this.props.footer} title={'ES7AndBeyond'}>
        <div style={styles.well}>
          <div style={styles.h3}>ES7 and Beyond</div>
          <div style={styles.p}>
            ES6 is the set of Javascript features as of 2015. There have already been many other features proposed for future versions of Javascript, including ES7 (2016) and ES8. With Babel, we can use many of these features today.
          </div>
          <div style={styles.p}>
            Some of these features have already become standards in modern Javascript development. Let's walk through a few of the more popular and useful features.
          </div>
          <div style={styles.h4}>Static properties</div>
          <div style={styles.p}>
            As we saw in our ES6 section, static functions on classes exist as a part of ES6. In ES7, we can use the <code>static</code> keyword to declare static properties as well.
          </div>
          <EditorTranspiler
            code={staticPropertyExample}
            title={'Static properties'}
          />
          <div style={styles.h4}>Bound instance methods</div>
          <div style={styles.p}>
            You've probably seen javascript functions bound to certain contexts with the <code>bind()</code> function. Binding is often used to ensure that a class's instance function is invoked with the correct context.
          </div>
          <div style={styles.p}>
            ES7 gives us a shorthand syntax to bind class instance functions to the context at the time they are defined. The <code>printName</code> function below is bound to current context at the time the class instance is created.
          </div>
          <EditorTranspiler
            code={boundInstanceMethodsExample}
            title={'Bound instance methods'}
          />
          <div style={styles.h4}>Object spread operator</div>
          <div style={styles.p}>
            Similar to the array spread operator in ES6, ES7 offers a spread operator <code>...</code> for objects. This tries to use ES6's <code>Object.assign</code>, as you'll see when you view the babel output of the spread operator. This can be very useful in copying or copying and modifying objects.
          </div>
          <div style={styles.p}>
            We can copy an object simply with <code>{`{...originalObj}`}</code>. Note that this is a shallow copy. We can also extend an object with <code>{`{...originalObj, key1: 'newValue'}`}</code>.
          </div>
          <EditorTranspiler
            code={objectSpreadExample}
            title={'Object spread operator'}
          />
          <div style={styles.h4}>Async / Await</div>
          <div style={styles.p}>
            ES7 gives us <code>async</code> functions that can use the <code>await</code> keyword to simplify asynchronous logic and readability. If a function is declared <code>async</code>, <code>await</code> will block code execution until the asynchronous operation is completed or fails.
          </div>
          <div style={styles.p}>
            This syntax also makes it easy to catch exceptions by surrounding <code>await</code> with a <code>try</code>/<code>catch</code> block.
          </div>
          <EditorTranspiler
            code={asyncAwaitExample}
            title={'Async/Await'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
