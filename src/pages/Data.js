import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'

export default class Data extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Data Management</div>
          <div style={styles.p}>
            Most apps have some kind of dynamic data: user info, images, documents, contacts, etc. There are several ways to manage data throughout an app, and the best choice depends on the complexity of an app. When in doubt, start simple, and as your application grows in complexity, use something more advanced.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Common Options for Managing Data</div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Option</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Component State</b></td>
                <td>Storing data in the <code>state</code> of your components is the simplest way to manage data throughout your app. Every time the user interacts with the app, update the state of a component, or use function <code>props</code> to update the state in parent components. It can be advantageous to maintain all state in the root component of the app, so that all state is managed in one place, making it easier to reason about the app and enabling you to easily switch to Redux if necessary.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><b>Redux</b></td>
                <td><a href={'https://facebook.github.io/react-native/docs/getting-started.html'}>
                  Redux</a> is the most common choice of library for managing data in medium and large apps. Redux provides a <code>store</code> object which maintains the application state, and can notify your React components when state changes. Redux was designed with React in mind, and has official React bindings: <a href={'https://github.com/reactjs/react-redux'}>React Redux</a>. There are additional tools around Redux to provide: control over asynchronous events, data persistence (for offline usage, etc), and more powerful debugging.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><b>Realm</b></td>
                <td>The <a href={'https://realm.io/docs/react-native/latest/'}>Realm</a> library uses the underlying SQLite database on iOS/Android devices for storage. It's suitable for apps with a tremendous amount of data (10,000+ records). If an app can't fit all its data in RAM, using a database makes it easy to page records in and out. Additionally, searching becomes extremely fast thanks to database indexes, and offline usage becomes trivial.</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><b>Firebase</b></td>
                <td><a href={'https://firebase.google.com/'}>Firebase</a> is a cloud service for storing and syncing data. Firebase is a great option when you don't have a backend or existing API to work with, since you can build a mobile app without setting up any infrastructure. Firebase's offers impressive realtime synchronization of data between (potentially thousands of) clients. The service also provides a web dashboard for viewing/modifying your data, user accounts & authentication, analytics, crash reporting, and more.</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.p}>
            Let's take a more in-depth look at each of these options.
          </div>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
