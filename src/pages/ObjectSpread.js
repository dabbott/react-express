import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const cat = {
  name: 'Luna',
  friends: {best: 'Ellie'},
  legs: 4,
}
const strangeCat = {...animal, legs: 6}

const sameCat = {...animal}
console.log(cat.friends === sameCat.friends) // true
sameCat.friends.best = 'Buddy'
console.log(cat.friends.best) // Buddy`

export default class ObjectSpread extends Component {
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
            Similar to the array spread operator in ES6, ES7 offers a spread operator <code>...</code> for objects. This tries to use ES6's <code>Object.assign</code>, as you'll see when you view the babel output of the spread operator. This can be very useful in copying or copying and modifying objects.
          </div>
          <div style={styles.p}>
            We can copy an object simply with <code>{`{...originalObj}`}</code>. Note that this is a shallow copy. We can also extend an object with <code>{`{...originalObj, key1: 'newValue'}`}</code>.
          </div>
          <EditorTranspiler
            code={code}
            title={'Object spread operator'}
          />
        </div>
      </Page>
    )
  }
}
