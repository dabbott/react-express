import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { Link } from 'react-router';

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
}

export default class extends Component {
  render() {
    return (
      <Page
        title={'React Native'}
        subtitle={'Build native, cross-platform apps faster'}>
        <div style={styles.well}>
          <div style={styles.h3}>Learning React Native</div>
          <div style={styles.p}>
            React Native is a framework for building cross-platform apps.
          </div>
          <div style={styles.p}>
            Building with React Native is extremely efficient and highly addictive - but getting started can be a little tricky. You should use this guide as a companion to the official Facebook documentation for <a href={'https://facebook.github.io/react-native/docs/getting-started.html'}>
              getting started
            </a>.
          </div>
          <div style={styles.p}>
            This guide uses the awesome project <a href={'https://github.com/necolas/react-native-web'}>react-native-web</a> to provide interactive examples in your browser.
          </div>
          <div style={styles.p}>
            Additionally, the Facebook guide assumes some existing knowledge about React development for the web. If you run into topics that aren't covered thoroughly, e.g. how Babel works, this guide provides interactive examples for you to play with and learn from.
          </div>
        </div>
        <div style={styles.well}>
          <Link to={'start'} style={buttonStyle}>
            Let's get started!
          </Link>
        </div>
      </Page>
    )
  }
}
