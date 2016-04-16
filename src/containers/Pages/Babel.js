import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class Babel extends Component {
  render() {
    return (
      <Page
        title={'Babel'}>
        <div style={styles.well}>
          <div style={styles.h3}>Modern JavaScript</div>
          <div style={styles.p}>
            In the old days, you could just include a <code>{`<script>`}</code> tag in the header, and your JavaScript would run as intended. These days, we preprocess our JavaScript in order to access experimental features and language extensions like JSX.
          </div>
          <div style={styles.p}>
            Babel is the main tool used to preprocess JavaScript. Babel is a highly configurable parser that lets you use experimental features and extensions, compiling down into old-style JavaScript that can be supported on a wider range of platforms. Of course, if a native platform doesn't support an ES6 feature like <code>Map()</code>, Babel won't fully be able to help -- but it can in many cases polyfill missing APIs to provide this functionality.
          </div>
        </div>
      </Page>
    )
  }
}
