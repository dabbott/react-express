import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer, GithubRepositoryLink } from "../components";

const inlineStyles = `import React, { Component } from 'react'
import { render } from 'react-dom'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

class Card extends Component {
  render() {
    const style = {
      padding: 20,
      textAlign: 'center',
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {

  state = {
    color: 'skyblue'
  }

  randomizeColor = () => this.setState({color: randomColor()})

  render() {
    const {color} = this.state

    const style = {
      padding: 20,
    }

    return (
      <div style={style}>
        <Card color={color}>
          <input
            type={'button'}
            value={'Randomize Color'}
            onClick={this.randomizeColor}
          />
        </Card>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const styledComponents = `import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

const Card = styled.div\`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: \${props => props.color};
\`

const Container = styled.div\`
  padding: 20px;
\`

class App extends Component {

  state = {
    color: 'skyblue'
  }

  randomizeColor = () => this.setState({color: randomColor()})

  render() {
    const {color} = this.state
    return (
      <Container>
        <Card color={color}>
          <input
            type={'button'}
            value={'Randomize Color'}
            onClick={this.randomizeColor}
          />
        </Card>
      </Container>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const vendorComponents = [
  [
    "styled-components",
    "https://unpkg.com/styled-components/dist/styled-components.min.js"
  ]
];

const content = markdown(markdownOptions)`
There are **many** different ways to style React components. The React community hasn't settled on one "best" way to style components, and new style libraries are created frequently. The method you choose is often based on personal preference, since the features of each method are generally pretty similar.

We'll look at three broad approaches: inline styles, CSS, and CSS-in-JS. When in doubt, I recommend starting with inline styles and choosing something else when you have a better sense of your requirements.

# Inline Styles

React includes a built-in way to style your components - simply pass a \`style\` attribute to a DOM component. We call these **inline styles**, just like we do in HTML.

This is a common and powerful way to style components; it doesn't required any libraries, it works on every React renderer (web, native, etc), and it can by fully dynamic (computed based on component \`state\` and \`props\`).

${<WebPlayer code={inlineStyles} />}

## Tradeoffs

Notice how we are easily able to change the color of our \`<Card />\` component without touching any CSS files or class names. With inline styles, we can use any JavaScript logic we want (e.g. using variables, merging multiple styles, rendering based on dynamic themes) to style components, without dealing with lots of CSS classnames. Note that for performance, if a style *isn't* dynamic, we will generally create the style outside of the \`render\` function, so that we don't constantly create new objects (which can trigger unnecessary re-renders).

The main downside of this approach is that we can't use many of the CSS features for dynamic styles - pseudo classes (\`:hover\`), media queries, keyframe animations, etc. Some of these we can emulate in JavaScript - e.g. it's easy but tedious to add a \`this.state.hover\` to our component, which we set to \`true\` in an \`onMouseEnter\` and \`false\` in an \`onMouseLeave\`. Some features such as keyframe animations can't be recreated without a *lot* of extra effort. Furthermore, if we're relying on external libraries that use CSS for styling, we may have no choice but to add some CSS to our app.

Another downside is that we don't get vendor prefixing out of the box. So we can't use properties like \`flex\`. There are several libraries that solve this problem, prefixing our style objects before we pass them into the \`style\` attribute of a component.

## In summary:

**Pros**
- Built-in (no libraries/dependencies)
- Dynamic (variables, themes, merging, etc)
- Component styles live in the same file as code and behaviors
- Works on every React renderer (web, native, etc)

**Cons**
- No CSS features (psuedoclasses, media queries, keyframe animations) out of the box
- No vendor prefixing out of the box
- New naming scheme / syntax to learn (camel-cased styles, with numbers or strings as values)

If you don't mind external dependencies and you don't plan to support other renderers like React Native, you can get vendor prefixing and some CSS features by using a library like ${(
  <GithubRepositoryLink user={"Khan"} repo={"aphrodite"} title={"Aphrodite"} />
)} (20K, 6K gzipped). There are many similar libraries for adding features on top of inline styles, each with a slightly different API.

# CSS and Class Names

Perhaps the most straightforward way to style components is with CSS. Simply write CSS using any pre-processor or post-processor you'd like (LESS, Sass, Stylus, PostCSS), and use the \`className\` attribute of your components to apply styles.

You can get dynamic styles by choosing a different \`className\` based on component \`state\` and \`props\`, e.g. \`${`className={this.props.selected ? 'selected-class' : 'normal-class'}`}\`. You can also mix-and-match with inline styles, although combining the two approaches should be kept to a minimum or the code quickly becomes hard to follow.

## In summary:

**Pros**
- All the power of CSS (feature-packed)
- Straightforward (nothing new to learn)
- Integrates well with non-React libraries that use class names for styling

**Cons**
- All the problems of CSS (generally large and unmaintainable codebase)
- Components are not self-contained in a single JavaScript file
- DOM renderer only (no React Native)

# CSS-in-JS

What if we could combine the inline styles and CSS approaches to get the best of both worlds? There's a third category of libraries that let us use CSS syntax inline in our JavaScript files. This comes with its own set of complexities, but it's nonetheless a very popular approach. Let's take a look at the library \`${(
  <GithubRepositoryLink
    user={"styled-components"}
    repo={"styled-components"}
    title={"styled-components"}
  />
)}\`.

${<WebPlayer code={styledComponents} vendorComponents={vendorComponents} />}

We can wrap our components using \`styled\`, which will create a CSS StyleSheet and apply the right \`className\` behind the scenes. Using this approach, we can write styles using the familiar old CSS syntax, while getting the benefits of CSS features and dynamic styles based on component \`props\`.

## In summary:

**Pros**
- Pretty dynamic (based on component props)
- CSS features (psuedoclasses, media queries, keyframe animations)
- Vendor prefixing
- Familiar CSS syntax
- Component styles live in the same file as code and behaviors
- Works on every React renderer (web, native, etc)

**Cons**
- Increases code size (slower to load)${<br />}${(
  <img
    src={
      "http://img.badgesize.io/https://unpkg.com/styled-components/dist/styled-components.min.js?label=size"
    }
  />
)} ${(
  <img
    src={
      "http://img.badgesize.io/https://unpkg.com/styled-components/dist/styled-components.min.js?compression=gzip&label=gzip%20size"
    }
  />
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
