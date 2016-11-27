import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const contentStyle = {
  paddingRight: '30px',
  marginTop: '-15px',
}

export default class Reddit2 extends Component {
  render() {
    return (
      <Page footer={this.props.footer} title={'Reddit OAuth'}>
        <div style={styles.well}>
          <div style={containerStyle}>
            <div style={contentStyle}>
              <div style={styles.h3}> Reddit OAuth </div>
              <div style={styles.p}>
              The authentication portion will focus on fetching the token and storing it in Redux. We've already
              setup a WebView and a client_id in the <code>Login.js</code> file for you.
              </div>
              <div style={styles.h4}> Tasks </div>
              <ul>
                <li style={styles.li}>
                  Implement <code>RedditClient.js</code>, use <a href="https://facebook.github.io/react-native/docs/network.html">fetch</a> for network requests. The base URL we'll be hitting is <code>https://oauth.reddit.com/</code>.
                </li>
                <li style={styles.li}>
                  Implement <code>userRedux.js</code>
                  <ul>
                    <li style={styles.li}>create action to show authentication is pending</li>
                    <li style={styles.li}>create action to show authentication has succeeded or failed and then store the token</li>
                    <li style={styles.li}>create reducer to store the token, errors, and whether an auth call is pending</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
