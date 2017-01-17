import React, { Component } from 'react'
import { Link } from 'react-router'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import styles from '../styles'
import { WebPlayer, GithubCorner, PageHeader } from '../components'

const code = `import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
`

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
  marginTop: 40,
}

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
React is a framework for building performant interfaces for the web and other platforms.

Learning React tends to go pretty quickly - but it can take a little while to wrap your head around "declarative" rendering if you haven't used the pattern before. You should use this guide as a companion to the official Facebook documentation for [getting started](https://facebook.github.io/react/docs/hello-world.html). While the official docs are great, the React ecosystem includes *many* other important projects, which are outside the scope of the React docs.

I hope you enjoy learning React. Reach out to me, [@devinaabbott](https://twitter.com/devinaabbott), with comments or questions you have along the way. Some pages are written by other authors (listed at top of each page), so feel free to contact them too.

# Hello World

When you write your first React app, you might start with something like this.

<WebPlayer code={code} />

You may notice the code doesn't look like the JavaScript you write currently. This is because it uses new language features (ES6 imports, classes) and the JSX language extension. While these things aren't *required* to write React, most React developers use them because they tend to be easier to use and more maintainable.

In the following sections, I'll give a brief background on each of these topics. If you're already familiar with each, skip to [Components](components) to learn more about React Components and the Component Lifecycle.
`

    return (
      <Page
        footer={this.props.footer}
        title={'React Express'}
        subtitle={'Learn React, the component-based UI framework'}
        logo={'//cdn.rawgit.com/dabbott/react-native-express/master/static/logo'}
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
        shouldUpdatePageTitle={false}
      >
        <GithubCorner />
        <PageHeader
          title={'Learning React'}
          author={'@devinaabbott'}
          authorURL={'https://twitter.com/devinaabbott'}
        />
        {content}
        <Link to={'modern_javascript'} style={buttonStyle}>
          Let's get started!
        </Link>
      </Page>
    )
  }
}
