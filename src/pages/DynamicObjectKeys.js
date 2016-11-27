import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const chosenAnimal = 'cat'
const animals = {
  [\`animal\${chosenAnimal}\`]: true,
}
console.log(animals.animalcat) // true`

export default class DynamicObjectKeys extends Component {
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
            In ES5, object literal keys are always interpreted as a string. ES6 allows us to use computed values as keys in object literals, using square bracket syntax: <code>[myKey]</code>
          </div>
          <EditorTranspiler
            code={code}
            title={'Dynamic object keys'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
