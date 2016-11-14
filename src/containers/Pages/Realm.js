import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class extends Component {
  render() {
    return (
      <Page title={'Realm'}>
        <div style={styles.well}>
          <div style={styles.h3}>Realm</div>
          <p>
            Realm is a cross-platform database wrapper for iOS and Android, made available as a React Native component. You can read more about it in the <a href={'https://realm.io/docs/react-native/latest/'}>Realm docs</a>.
          </p>
          <p>
            We won't go into much detail here, but Realm is generally your best option if you want to use a real database, instead of storing all data in-memory with Redux. With Realm, you can:
          </p>
          <ul>
            <li>Create relational models using schemas</li>
            <li>Create, update, and delete records using transactions</li>
            <li>Query tables and observe the results</li>
            <li>Migrate the database</li>
            <li>Encrypt stored data</li>
          </ul>
          <p>
            Realm also has an awesome desktop app for browsing the data stored on-device, which is a much better developer experience than using a SQLite database directly, so make sure to check it out.
          </p>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
