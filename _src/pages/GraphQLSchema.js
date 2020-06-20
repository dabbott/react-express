import React from 'react'
import markdown from 'markdown-in-js'
import Page from './Page'
import { PageHeader } from '../components'

import markdownOptions from '../utils/MarkdownOptions'

const content = markdown(markdownOptions)`

In this section, we'll discuss the backbone of every GraphQL server: The GraphQL Schema.

> For a technical deep dive all around the GraphQL schema, be sure to check out [this](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e) article.

## The Schema Definition Language (SDL)

GraphQL has a [type system](http://graphql.org/learn/schema/#type-system) that’s used to define the capabilities of an API. These capabilities are written down in the GraphQL *schema* using the syntax of the GraphQL [Schema Definition Language](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51) (SDL). Here’s what the \`Post\` type from our previous examples looks like:

${<pre><code>{
`type Post {
  id: ID!
  description: String!
  imageUrl: String!
}`
}</code></pre>}

The syntax is pretty straightforward. We’re defining a type called \`Post\` that has three properties, in GraphQL terminology these properties are called _fields_. Each field has a *name* and a *type*. The exclamation point following a type means that this field cannot be \`null\`.

## Schema Root Types

Each schema has so-called [root types](http://graphql.org/learn/schema/#the-query-and-mutation-types) that define the *entry points* into the API. These are the root types that you can define in your schema:

* \`Query\`: Specifies all the queries a GraphQL server accepts
* \`Mutation\`: Specifies all the mutations a GraphQL server accepts
* \`Subscription\`: Specifies all the subscriptions a GraphQL server accepts (subscriptions are used for realtime functionality, learn more [here](http://graphql.org/blog/subscriptions-in-graphql-and-relay/))

To enable the \`feed\` query and \`createPost\` mutation that we saw in the previous examples, you’d have to write the root types as follows:

${<pre><code>{
`type Query {
  feed: [Post!]!
}

type Mutation {
  createPost(description: String!, imageUrl: String!): Post
}`
}</code></pre>}

You can read more about the core GraphQL constructs [here](https://www.howtographql.com/basics/2-core-concepts/).
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

