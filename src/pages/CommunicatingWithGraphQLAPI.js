import React from 'react'
import markdown from 'markdown-in-js'
import Page from './Page'
import { PageHeader } from '../components'

import markdownOptions from '../utils/MarkdownOptions'


const content = markdown(markdownOptions)`

In this section, we’ll explain the core concepts you need to know when working with a GraphQL API. 

## Fetching Data with GraphQL Queries

When an application needs to retrieve data from a GraphQL API, it has to send a _query_ to the server in which it specifies the data requirements. Most GraphQL servers accept only HTTP POST requests where the query is put into the *body* of the request. Note however that GraphQL itself is actually *transport layer agnostic*, meaning that the client-server communication could also happen using other networking protocols than HTTP.

Here’s an example query that a client might send in an Instagram-like application:

${<pre><code>{
`query {
  feed {
    id
    imageUrl
    description
  }
}`
}</code></pre>}

The keyword \`query\` in the beginning expresses the *operation type*. Besides \`query\`, there are two more operation types called \`mutation\` and \`subscription\`. Note that the default operation type of a request is in fact \`query\`, so you might as well remove it from the above request. \`feed\` is the *root field* of the query and everything that follows is called the *selection set* of the query. 

When a server receives the above query, it will [resolve](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e#1880) it, i.e. collect the required data, and package up the response in the same format of the query. Here’s what a potential response could look like:

${<pre><code>{
`{
  "data": {
    "feed": [
      {
        "id": "1",
        "description": "Nice Sunset",
        "imageUrl": "http://example.org/sunset.png"
      },
      {
        "id": "2",
        "description": "Cute Cats",
        "imageUrl": "http://example.org/cats.png"
      }
    ]
  }
}`
}</code></pre>}

The root of the returned JSON object is a field called \`data\` as defined in the official [GraphQL specification](http://facebook.github.io/graphql/#sec-Data). The rest of the JSON object then contains exactly the information that the client asked for in the query. If the client for example hadn’t included the \`imageUrl\` in the query’s selection set, the server wouldn’t have included it in its response either. 

In case the GraphQL request fails for some reason, e.g. because the query was malformed, the server will not return the \`data\` field but instead return an array called \`errors\` with information about the failure. Notice that it can happen that the server returns both, \`data\` *and* \`errors\` . This can occur when the server can only partially resolve a query, e.g. because the user requesting the data only had the access rights for specific parts of the query's payload.

## Creating, Updating and Deleting Data with GraphQL Mutations

Most of the time when working with an API, you’ll also want to make changes to the data that’s currently stored in the backend. In GraphQL, this is done using so-called *mutations*. A mutation follows the exact same syntactical structure as a query. In fact, it actually also *is* a query in that it combines a write operation with a directly following read operation.  Essentially, the idea of a mutation corresponds to the PUT, POST and DELETE calls that you would run against a REST API but additionally allows you to fetch data in a single request.

Let’s consider an example mutation to create a new post in our sample Instagram app:

${<pre><code>{
`mutation {
  createPost(description: "Funny Birds", imageUrl: "http://example.org/birds.png") {
    id
  }
}`
}</code></pre>}


Instead of the \`query\` operation type, this time we’re using \`mutation\`. Then follows the *root field*, which in this case is called \`createPost\`. Notice that all fields can also take arguments, here we provide the post’s \`description\` and \`imageUrl\` so the server knows what it should write into the database. In the payload of the mutation we simply specify the \`id\` of the new post that will be generated on the server-side.

After the server created the new post in the database, it will return the following sample response to the client:

${<pre><code>{
  `{
  "data": {
    "createPost": {
        "id": "1"
      }
  }
}`
}</code></pre>}

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

