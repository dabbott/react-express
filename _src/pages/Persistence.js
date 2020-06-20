import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Client-side data persistence is often crucial to a great mobile experience: remembering a user's preferences and credentials, and showing data immediately when the app starts, instead of showing a spinner while fetching data remotely.

Generally, there are two ways to persist data on the client:
- The built-in \`AsyncStorage\` API, or libraries wrapping it
- A SQLite / native database wrapper

# Common Options for Client-side Persistence

Option | Description
--- | ---
**AsyncStorage** | \`AsyncStorage\` is a simple, low-level API for a key-value store. You can easily store and retrieve key-value pairs.
**Redux Persist** | [Redux Persist](https://github.com/rt2zz/redux-persist) is a library for automatically persisting the state of your Redux store to \`AsyncStorage\` on store changes, and rehydrating the store with this saved state when the app launches.
**Realm** | The [Realm](https://realm.io/docs/react-native/latest/) library uses a custom database, written from scratch in C to be compatible on both iOS and Android. We covered Realm separately under Data Management, but if you're using Realm for managing your data, you get persistence for free!

Let's look at a few examples using \`AsyncStorage\` and Redux Persist.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
