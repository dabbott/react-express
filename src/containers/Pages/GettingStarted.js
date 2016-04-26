import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { EditorPlayer } from '../../components'
import { Link } from 'react-router'

const defaultValue = `/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyApp', () => App);`

export default class extends Component {
  render() {
    return (
      <Page
        title={'Getting Started'}>
        <div style={styles.well}>
          <div style={styles.h3}>Getting Started</div>
          <div style={styles.p}>
            To set up React Native in your local development environment, follow the official Facebook guide <a href={'https://facebook.github.io/react-native/docs/getting-started.html'}>
              here
            </a>.
          </div>
          <div style={styles.p}>
            However, you may also skip this setup for now and continue using this guide and running examples interactively in the browser.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Hello World</div>
          <div style={styles.p}>
            When you create a new React Native app, it will look like this:
          </div>
          <EditorPlayer
            value={defaultValue}
            inputHeader={'Hello World'}
          />
          <div style={styles.p}>
            You may notice the code doesn't look like the JavaScript you write currently. This is because it uses new language features (ES6 imports, classes, block-scoped variable declarations) and the JSX language extension.
          </div>
          <div style={styles.p}>
            In the following sections, I'll give a brief background on each of these topics. If you're already familiar with each, skip to <Link to={'components'}>Components</Link> to learn more about React Components and the Component Lifecycle. If you're already familiar with React, skip to <Link to={'core_components'}>Core Components</Link>.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
