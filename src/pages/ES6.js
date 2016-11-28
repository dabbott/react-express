import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler, Author } from '../components'
import Page from './Page'
import styles from './styles'

export default class ES6 extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            What is ES6, anyway?
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            ECMAScript is the language specification used to implement the JavaScript language. ES6, or ECMAScript 6, is the first significant update to the language since ES5 was initially released in 2009.
          </div>
          <div style={styles.p}>
            Many ES6 features are already available in modern JavaScript engines. Using Babel, however, gives us access to many more features, while ensuring our JavaScript runs on more platforms. React Native uses Babel to enable ES6 features and ensure cross-platform consistency, as your JavaScript will run on Android, iOS, Windows, and other platforms.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>ES6 Highlights</div>
          <div style={styles.p}>
            Let's take a look at some of the new language features we'll be using, and how they get compiled through Babel. There are a lot of language features to go through, so if you get tired, you can move on to <Link to={'components'}>React Components</Link>, and finish up the language sections another time.
          </div>
        </div>
      </Page>
    )
  }
}
