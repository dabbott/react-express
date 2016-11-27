import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class Babel extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Modern JavaScript</div>
          <div style={styles.p}>
            In the old days, you could just include a <code>{`<script>`}</code> tag in the header of your webpage, and your JavaScript would run as intended. These days, we preprocess our JavaScript in order to access experimental features and language extensions like JSX.
          </div>
          <div style={styles.p}>
            Babel is the main tool used to preprocess JavaScript. Babel is a highly configurable parser that lets you use experimental features and extensions, compiling down into old-style JavaScript that can be supported on a wider range of platforms. Of course, if a native platform doesn't support an ES6 feature like <code>Map()</code>, Babel won't fully be able to help -- but it can in many cases polyfill missing APIs to provide this functionality.
          </div>
          <div style={styles.p}>
            Babel enables debugging of the the original source code by including <b>source maps</b> with the compiled JavaScript. JavaScript interpretters will run the compiled code, but map it to the source code in the debugger so that you can debug the source code instead of the (generally quite ugly) compiled output.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Babel Configuration</div>
          <div style={styles.p}>
            You can configure Babel by including a <code>{`.babelrc`}</code> file in the root directory of your project. This file can specify which experimental JS features to enable and which plugins to use (JSX).
          </div>
          <div style={styles.p}>
            React Native takes care of properly configuring babel for you, so you generally won't need to create a <code>{`.babelrc`}</code>. However, if you want to modify the default presets, you can use the npm package <a href={'https://github.com/facebook/react-native/tree/master/babel-preset'}>babel-preset-react-native</a> as a base configuration, and apply additional plugins/configuration on top.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
