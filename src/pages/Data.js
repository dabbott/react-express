import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
Most apps have some kind of dynamic data: user info, images, documents, contacts, etc. There are several ways to manage data throughout an app, and the best choice depends on the complexity of an app. When in doubt, start simple, and as your application grows in complexity, use something more advanced.

# Common Options for Managing Data

Option | Description
--- | ---
**Component State** | Storing data in the \`state\` of your components is the simplest way to manage data throughout your app. Every time the user interacts with the app, update the state of a component, or use function \`props\` to update the state in parent components. It can be advantageous to maintain all state in the root component of the app, so that all state is managed in one place, making it easier to reason about the app and enabling you to easily switch to Redux if necessary.
**Redux** | [Redux](https://facebook.github.io/react-native/docs/getting-started.html) is the most common choice of library for managing data in medium and large apps. Redux provides a \`store\` object which maintains the application state, and can notify your React components when state changes. Redux was designed with React in mind, and has official React bindings: [React Redux](https://github.com/reactjs/react-redux). There are additional tools around Redux to provide: control over asynchronous events, data persistence (for offline usage, etc), and more powerful debugging.
**Realm** | The [Realm](https://realm.io/docs/react-native/latest/) library uses a custom database, written from scratch in C to be compatible on both iOS and Android. It's suitable for apps with a tremendous amount of data (10,000+ records). If an app can't fit all its data in RAM, using a database makes it easy to page records in and out. Additionally, searching becomes extremely fast thanks to database indexes, and offline usage becomes trivial.
**Firebase** | [Firebase](https://firebase.google.com/) is a cloud service for storing and syncing data. Firebase is a great option when you don't have a backend or existing API to work with, since you can build a mobile app without setting up any infrastructure. Firebase's offers impressive realtime synchronization of data between (potentially thousands of) clients. The service also provides a web dashboard for viewing/modifying your data, user accounts & authentication, analytics, crash reporting, and more.

Let's take a more in-depth look at each of these options.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
