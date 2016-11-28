import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const animals = ['cat', 'dog', 'moose']
const newAnimals = [...animals]
const lotsOfAnimals = [...animals, 'bear', 'mouse', 'donkey']
const fruits = [{name: 'banana', color: 'yellow'}, {name: 'apple', color: 'red'}]
const newFruits = [...fruits]
console.log(fruits[0] === newFruits[0]) // true
newFruits[0].name = 'fofana'
console.log(fruits[0].name) // fofana`

export default class ArraySpread extends Component {
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
            The array spread syntax makes it easy to expand an array. This can be used to make a shallow copy of an array, optionally with other elements added to the copy.
          </div>
          <EditorTranspiler
            code={code}
            title={'Array spread'}
          />
        </div>
      </Page>
    )
  }
}
