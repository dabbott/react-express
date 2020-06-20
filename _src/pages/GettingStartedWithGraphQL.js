import React from 'react'
import markdown from 'markdown-in-js'
import Page from './Page'
import { PageHeader } from '../components'

import markdownOptions from '../utils/MarkdownOptions'


const content = markdown(markdownOptions)`

## Overview

The first thing you need when getting started with GraphQL is of course a GraphQL server. As GraphQL itself is only a [specification](https://facebook.github.io/graphql/), you can either implement your own server using one of the available [reference implementations](http://graphql.org/code/#server-libraries) or take a shortcut by using a tool like [Apollo Launchpad](https://launchpad.graphql.com/). The best way to get started with GraphQL in production is to use [\`graphql-yoga\`](https://github.com/graphcool/graphql-yoga), a flexible GraphQL server based on Express.js. \`graphql-yoga\` has a number of compelling features, such as support for [GraphQL Playground](https://github.com/graphcool/graphql-playground) and built-in GraphQL subscriptions for realtime functionality.

A great way to add a database to your GraphQL server is by using [Prisma](http://prismagraphql.com/). Prisma is an open-source GraphQL query engine that turns your database into a GraphQL API. Thanks to [Prisma bindings](https://github.com/graphcool/prisma-binding), it integrates nicely with your \`graphql-yoga\` server.

> To learn how to build a GraphQL server, check out this [tutorial](https://blog.graph.cool/tutorial-how-to-build-a-graphql-server-with-graphql-yoga-6da86f346e68) or watch this 4-min demo [video](https://www.youtube.com/watch?v=20zGexpEitc).

Since GraphQL servers are commonly implemented with HTTP, you can simply use \`fetch\` to get started and send queries and mutations to interact with the server. However, when working with GraphQL on the frontend, you’ll usually want to use a [GraphQL client](https://www.howtographql.com/advanced/0-clients/) library. GraphQL clients generally provide handy abstractions and allow you to directly send queries and mutations without having to worry about lower-level networking details.

There are four major GraphQL clients available at the moment:

* [Apollo Client](https://www.apollographql.com/client): Community-driven, flexible and powerful GraphQL client that’s easy to understand and has an intuitive API.
* [Relay](https://facebook.github.io/relay/): Facebook’s homegrown GraphQL client that’s heavily optimized for performance and comes with a notable learning curve.
* [Urql](https://github.com/FormidableLabs/urql): Simple GraphQL client for React.
* [graphql-request](https://github.com/graphcool/graphql-request): Simple and lightweight GraphQL client that works in all JavaScript environments and can be used for simple use cases like scripting.

Apollo, Relay and Urql implement further features like caching, realtime support with GraphQL subscriptions or optimistic UI updates.

## Creating your own GraphQL Server

The fastest way to get started with GraphQL is by using a [GraphQL boilerplate](https://github.com/graphql-boilerplates) project for the technology of your choice. GraphQL boilerplates provide the ideal starter kits for your GraphQL-based projects - no matter if backend-only or fullstack.

To get started, you can use the \`graphql create\` command (which is similar to \`create-react-app\` and \`create-react-native-app\`).

First, you need to install the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli):

${<pre><code>{
`npm install -g graphql-cli`
}</code></pre>}

With the CLI installed, you can run the following command:

${<pre><code>{
`graphql create myapp`
}</code></pre>}

This will prompt you a list of the available boilerplates. Each technology has a \`minimal\`, a \`basic\` and an \`advanced\` version.

Choose \`minimal\` to learn what the most minimal version of a GraphQL server looks like. \`basic\` boilerplates come with an integrated database (based on Prisma). Finally, the \`advanced\` boilerplates additionally come with built-in authentication functionality for your users as well as support for realtime subscriptions.

To skip the interactive prompt, you can also pass the \`--boilerplate\` (short: \`-b\`) flag to the \`graphql create\` command and specify which starter kit you'd like to use. For example:

${<pre><code>{
`graphql create myapp --boilerplate node-advanced # The advanced boilerplate for Node.js
# or 
graphql create myapp --boilerplate react-fullstack-basic # The basic boilerplate for a fullstack React app`
}</code></pre>}

## Running a practical example with React, Apollo & GraphQL

If you want to get your hands dirty and learn how to get started with a practical example, check out the [basic](https://github.com/graphql-boilerplates/react-fullstack-graphql/tree/master/basic) boilerplate for a fullstack React application.

Run \`graphql create\` and specify \`react-fullstack-basic\` as your target boilerplate:

${<pre><code>{
`graphql create myapp --boilerplate react-fullstack-basic`
}</code></pre>}

The GraphQL CLI will now fetch the code from the corresponding [GitHub repository](https://github.com/graphql-boilerplates/react-fullstack-graphql/) and run an install [script](https://github.com/graphql-boilerplates/react-fullstack-graphql/blob/master/basic/.install/index.js) to configure everything that's required.

After having downloaded the code from the repo, the CLI will prompt you to choose where you want to deploy your Prisma database service. To get started quickly, select one of the _development clusters_ (\`prisma-eu1\` or \`prisma-us1\`). If you have [Docker](https://www.docker.com/) installed, you can also deploy locally.

The install script will use the generated endpoint for the Prisma service and connect the GraphQL server with it by insterting it into \`src/server/index.js\`.

Once the command has finished, you first need to start the server and second start the React app:

${<pre><code>{
`cd myapp/server
yarn start
# the server is now running on http://localhost:4000;
# to continue, open a new tab in your terminal 
# and navigate back to the root directory
cd ..
yarn start`
}</code></pre>}

The React app is now running on [http://localhost:3000](http://localhost:3000) in your browser.

> To learn about the queries and mutations accepted by the GraphQL API, check out the GraphQL schema that's stored in \`server/src/schema.graphql\`.

## Next Steps & Resources

* **GraphQL server basics**: Check out this tutorial series about GraphQL servers:
  * [GraphQL Server Basics (Part 1): The Schema](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
  * [GraphQL Server Basics (Part 2): The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
  * [GraphQL Server Basics (Part 3): Demystifying the info Argument in GraphQL Resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)
  * [Tutorial: How to build a GraphQL server with graphql-yoga](https://blog.graph.cool/tutorial-how-to-build-a-graphql-server-with-graphql-yoga-6da86f346e68)
* **Server deployment**: You can deploy your GraphQL servers to the web using [Now](https://blog.graph.cool/deploying-graphql-servers-with-zeit-now-85f4757b79a7) or [Up](https://blog.graph.cool/deploying-graphql-servers-with-apex-up-522f2b75a2ac)
* **Prisma database service**: Learn more about the ideas behind Prisma and best practices for building GraphQL servers [here](https://www.prismagraphql.com/docs/reference/introduction/what-is-prisma-apohpae9ju)
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

