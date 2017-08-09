import React from 'react'
import markdown from 'markdown-in-js'
import Page from './Page'
import { PageHeader } from '../components'

import markdownOptions from '../utils/MarkdownOptions'


const content = markdown(markdownOptions)`

## Overview

The first thing you need when getting started with GraphQL is of course a GraphQL server. As GraphQL itself is only a [specification](https://facebook.github.io/graphql/), you can either implement your own server using one of the available [reference implementations](http://graphql.org/code/#server-libraries) or take a shortcut by using a tool like [Apollo Launchpad](https://launchpad.graphql.com/). To get started with GraphQL in production, you can use [Graphcool](https://www.graph.cool/) to setup your scalable GraphQL server in a few minutes.

Since GraphQL servers are commonly implemented with HTTP, you can simply use \`fetch\` to get started and send queries and mutations to interact with the server. However, when working with GraphQL on the frontend, you’ll usually want to use a [GraphQL client](https://www.howtographql.com/advanced/0-clients/) library. GraphQL clients generally provide handy abstractions and allow you to directly send queries and mutations without having to worry about lower-level networking details. 

There are three major GraphQL clients available at the moment:

* [Apollo Client](http://dev.apollodata.com/react/): Community-driven, flexible and powerful GraphQL client that’s easy to understand and has an intuitive API.
* [Relay](https://facebook.github.io/relay/): Facebook’s homegrown GraphQL client that’s heavily optimized for performance and comes with a notable learning curve.
* [graphql-request](https://github.com/graphcool/graphql-request): Simple and lightweight GraphQL client that works in all Javascript environments and can be used for simple use cases like scripting.

Apollo and Relay both implement further features like caching, realtime support with GraphQL subscriptions or optimistic UI updates.


## Creating your own GraphQL Server

The fastest way to get started with GraphQL is by using the [Graphcool CLI](https://github.com/graphcool/graphcool-cli). You can simply install it via npm:

${<pre><code>{
`npm install -g graphcool`
}</code></pre>}

Once you have the CLI installed, you can use the \`graphcool init\` command to create and setup your GraphQL server. Pass the \`--schema\` option to specify what the data model for your API should look like:


## Running a practical example with React, Apollo & GraphQL

If you want to get your hands dirty and learn how to get started with a practical example, you can follow these steps to run the [sample Instagram](https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-apollo) application with React, Apollo Client and GraphQL. Watch this [5-minute tutorial video](https://www.youtube.com/watch?v=OoPQl8hcIug) for further info.


Step 1: Clone example repository

${<pre><code>{
`git clone https://github.com/graphcool-examples/react-graphql.git
cd react-graphql/quickstart-with-apollo`
}</code></pre>}


Step 2: Create GraphQL API with [\`graphcool\`](https://www.npmjs.com/package/graphcool)

${<pre><code>{
`# Install Graphcool CLI
npm install -g graphcool

# Create a new project based on the Instagram schema
graphcool init --schema https://graphqlbin.com/instagram.graphql`
}</code></pre>}

This creates a GraphQL API for the following schema:

${<pre><code>{
`type Post {
  description: String!
    imageUrl: String!
}`
}</code></pre>}


Step 3: Connect the app with your GraphQL API

Copy the \`Simple API\` endpoint to \`./src/index.js\` as the \`uri\` argument in the \`createNetworkInterface\` call:

${<pre><code>{
`// replace \`__SIMPLE_API_ENDPOINT__\` with the endpoint from the previous step
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })`
}</code></pre>}

Step 4: Install dependencies & run locally

${<pre><code>{
`yarn install
yarn start # open http://localhost:3000 in your browser`
}</code></pre>}

## Next Steps & Resources

If you want to learn how you can implement more advanced features with GraphQL, take a look at the following articles:

* [Advanced GraphQL features](https://www.graph.cool/docs/tutorials/advanced-features-eath7duf7d/)
* [Authentication & Permissions](https://www.graph.cool/docs/reference/authorization/overview-iegoo0heez/)
* [Implementing business logic with serverless functions](https://www.graph.cool/docs/reference/functions/overview-boo6uteemo/)

`

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"@nikolasburk"}
      authorURL={'https://twitter.com/nikolasburk'}
    />
    {content}
  </Page>

