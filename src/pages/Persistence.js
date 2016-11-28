import React, { Component } from 'react'

import Page from './Page'
import styles from './styles'
import { Author } from '../components'

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            Client-side data persistence is often crucial to a great mobile experience: remembering a user's preferences and credentials, and showing data immediately when the app starts, instead of showing a spinner while fetching data remotely.
          </div>
          <div style={styles.p}>
            Generally, there are two ways to persist data on the client:
            <ul>
              <li>The built-in <code>AsyncStorage</code> API, or libraries wrapping it</li>
              <li>A SQLite database wrapper</li>
            </ul>
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Common Options for Client-side Persistence</div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Option</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>AsyncStorage</b></td>
                <td><code>AsyncStorage</code> is a simple, low-level API for a key-value store. You can easily store and retrieve key-value pairs.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><b>Redux Persist</b></td>
                <td><a href={'https://github.com/rt2zz/redux-persist'}>
                  Redux Persist</a> is a library for automatically persisting the state of your Redux store to <code>AsyncStorage</code> on store changes, and rehydrating the store with this saved state when the app launches.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><b>Realm</b></td>
                <td>The <a href={'https://realm.io/docs/react-native/latest/'}>Realm</a> library uses a custom database, written from scratch in C to be compatible on both iOS and Android. We covered Realm separately under Data Management, but if you're using Realm for managing your data, you get persistence for free!</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.p}>
            Let's look at a few examples using <code>AsyncStorage</code> and Redux Persist.
          </div>
        </div>
      </Page>
    )
  }
}
