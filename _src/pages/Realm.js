import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Realm is a cross-platform database for iOS and Android, made available as a React Native component. You can read more about it in the [Realm docs](https://realm.io/docs/react-native/latest/).

We won't go into much detail here, but Realm is generally your best option if you want to use a real database, instead of storing all data in-memory with Redux. With Realm, you can:

- Create relational models using schemas
- Create, update, and delete records using transactions
- Query tables and observe the results
- Migrate the database
- Encrypt stored data

Realm also has an awesome desktop app for browsing the data stored on-device, which is a much better developer experience than using a SQLite database directly, so make sure to check it out.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
