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

The fastest way to get started with GraphQL is by using the [Graphcool CLI](https://www.graph.cool/docs/reference/cli/overview-kie1quohli/). You can simply install it via npm:

${<pre><code>{
`npm install -g graphcool`
}</code></pre>}

Once you have the CLI installed, you can use the \`graphcool init\` and \`graphcool deploy\` commands to bootstrap and deploy your GraphQL server. 

## Running a practical example with React, Apollo & GraphQL

If you want to get your hands dirty and learn how to get started with a practical example, you can follow these steps to run the [sample Instagram](https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-apollo) application with React, Apollo Client and GraphQL. Watch this [5-minute tutorial video](https://www.youtube.com/watch?v=xmri5pNR9-Y) for further info.


Step 1: Clone example repository

${<pre><code>{
`git clone https://github.com/graphcool-examples/react-graphql.git
cd react-graphql/quickstart-with-apollo`
}</code></pre>}


Step 2: Create GraphQL API with [\`graphcool\`](https://www.npmjs.com/package/graphcool)

${<pre><code>{
`# Install Graphcool CLI
npm install -g graphcool

# Create a new service inside a directory called `server`
graphcool init server
}</code></pre>}

This created the following file structure in the current directory:

${<pre><code>{
`.
└── server
    ├── graphcool.yml
    ├── types.graphql
    ├── package.json
    └── src
        ├── hello.graphql
        └── hello.js`
}</code></pre>}

Step 3: Define data model

Next, you need to define your data model inside the newly created \`types.graphql\`-file.

Replace the current contents in \`types.graphql\` with the following type definition (you can delete the predefined \`User\` type):

${<pre><code>{
`type Post @model {
  # Required system field
  id: ID! @isUnique # read-only (managed by Graphcool)

  # Optional system fields (remove if not needed)
  createdAt: DateTime! # read-only (managed by Graphcool)
  updatedAt: DateTime! # read-only (managed by Graphcool)

  description: String!
  imageUrl: String!
}`
}</code></pre>}

Step 4: Deploy the GraphQL server

You're now ready to put your Graphcool service into production! Navigate into the \`server\` directory and [deploy](https://docs-next.graph.cool/reference/graphcool-cli/commands-aiteerae6l#graphcool-deploy) the service:

${<pre><code>{
`cd server
graphcool deploy`
}</code></pre>}

When prompted which cluster you want to deploy to, choose any of the **Shared Clusters** options (\`shared-eu-west-1\`, \`shared-ap-northeast-1\` or \`shared-us-west-2\`).

Save the HTTP endpoint for the Simple API from the output, you'll need it in the next step.

> **Note:** You can now test your GraphQL API inside a GraphQL playground. Simply type the \`graphcool playground\` command and start sending queries and mutations.

Step 5: Connect React app with your GraphQL API

Paste the **Simple API** endpoint from the previous step to \`./src/index.js\` as the \`uri\` argument in the \`HttpLink\` constructor call:

${<pre><code>{
`// replace \`__SIMPLE_API_ENDPOINT__\` with the endpoint from the previous step
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })`
}</code></pre>}

Step 6: Install dependencies & run locally

${<pre><code>{
`yarn install
yarn start # open http://localhost:3000 in your browser`
}</code></pre>}

## Next Steps & Resources

If you want to learn how you can implement more advanced features with GraphQL, take a look at the following articles:

* [Documentation](https://www.graph.cool/docs)
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

