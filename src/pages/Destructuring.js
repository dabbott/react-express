import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const code = `const arr = ['one!', 'two!', 'three!', 'four!']
const [one, two, ...rest] = arr

const obj = {a: 'x', b: 'y', c: 'z'}
const {a, b, c} = obj`

export default class Destructuring extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>{this.props.title}</div>
          <div style={styles.p}>
            Destructuring is a convenient way to extract multiple keys from an object or array simultaneously and assign the values to local variables.
          </div>
          <EditorTranspiler
            code={code}
            title={'Destructuring'}
          />
        </div>
      </Page>
    )
  }
}
