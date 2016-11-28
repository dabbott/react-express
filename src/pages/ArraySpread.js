import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const printAnimal = (animal = 'cat') => {
  console.log(animal)
}
printAnimal() // cat
printAnimal('dog') // dog`

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
