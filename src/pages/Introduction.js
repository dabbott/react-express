import { Link } from "react-router";
import React, { Component } from "react";
import markdown from "markdown-in-js";

import { GithubCorner, PageHeader } from "../components";
import Page from "./Page";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

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
`;

const buttonStyle = {
  padding: "10px 15px",
  color: "white",
  borderRadius: 3,
  backgroundColor: "rgb(54,203,170)",
  textAlign: "center",
  display: "block",
  marginTop: 40
};

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
React is a library for building performant interfaces for the web and other platforms.

You should use this guide as a companion to the official Facebook documentation for [getting started](https://facebook.github.io/react/docs/hello-world.html). While the official docs are great, the React ecosystem includes *many* other important projects which are outside the scope of the React docs.

This guide is intended for people who know HTML, CSS, and JavaScript at a beginner-to-intermediate level already. We'll cover everything beyond that: newer language features, build tools, and React in-depth.

I hope you enjoy learning React. Reach out to me, [@devinaabbott](https://twitter.com/devinaabbott), with comments or questions you have along the way. Some pages are written by other authors (listed at top of each page), so feel free to contact them too. Huge thanks to [Gabe G'Sell](http://gabegsell.com/) for writing content with me and proofreading.

PS: I recommend viewing this guide from a desktop browser rather than mobile, since the desktop version supports interactive examples.

# Hello World

When you write your first React app, you might start with something like this.

${<WebPlayer code={code} />}

The first thing we'll cover is how to set up an environment and build a React app.

You may notice the code doesn't look like the JavaScript you write currently. This is because it uses new language features (ES2015 imports, classes) and the JSX language extension. While these things aren't *required* to write React, most React developers use them because they tend to be easier to use and more maintainable. These require a few extra steps in the build process, but this is a tradeoff React developers are willing to pay.

In the following sections, I'll give a brief background on build tools: npm, webpack, babel, etc. If you're already familiar with each, skip to [React API](react_api) to learn more about the top-level React API.
`;

    return (
      <Page
        footer={this.props.footer}
        title={"React Express"}
        subtitle={
          "The all-in-one guide to modern React application development"
        }
        logo={
          "//cdn.rawgit.com/dabbott/react-native-express/master/static/logo"
        }
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
      >
        <GithubCorner />
        <PageHeader
          title={"Learning React"}
          author={"@devinaabbott"}
          authorURL={"https://twitter.com/devinaabbott"}
        />
        {content}
        <Link to={"environment"} style={buttonStyle}>
          Let's get started!
        </Link>
      </Page>
    );
  }
}
