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

export default class DefaultParameters extends Component {
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
            We can assign default values to function parameters within the function declaration. A default value is assigned to a parameter if it is <code>undefined</code>.
          </div>
          <EditorTranspiler
            code={code}
            title={'Default parameters'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
