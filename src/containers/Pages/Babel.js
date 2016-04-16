import React, { Component } from 'react';

import {
  EditorTranspiler
} from '../../components'

const backgroundImage = require('./background.png')

const titleStyle = {
  textAlign: 'center',
  fontSize: 60,
  fontWeight: 100,
}

const bannerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 400,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: -1,
}

const style = {
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: 0,
}

const contentStyle = {
  flex: '1 1 auto',
  paddingTop: 400,
  overflowY: 'auto',
  zIndex: 1,
  minWidth: 0,
  minHeight: 0,
  // backgroundColor: 'white',
}

const scrollerStyle = {
  // boxShadow: '0 0 100px rgba(0,0,0,0.05)',
  borderTop: '1px solid rgba(220,220,220,0.5)',
  backgroundColor: 'white',
  padding: '40px 40px',
}

const wellStyle = {
  padding: '20px 20px',
}

const h3 = {
  fontSize: 20,
  fontWeight: 300,
  marginTop: 15,
  marginBottom: 15,
}

const h4 = {
  fontSize: 14,
  fontWeight: 500,
  marginTop: 35,
  marginBottom: 15,
}

const p = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
  marginBottom: 15
}

const cmHeaderCodeStyle = {
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  color: 'rgba(0,0,0,0.8)',
}

export default class Learn extends Component {
  constructor() {
    super()
    this.state = {
      scrollTop: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.refs.scrollable.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const node = this.refs.scrollable
    console.log('scrolltop', node.scrollTop)
    this.setState({
      scrollTop: node.scrollTop,
    })
  }

  render() {
    const moveBannerStyle = Object.assign({}, bannerStyle, {
      top: - this.state.scrollTop / 1.8,
    })
    return (
      <div style={style}>
        <div style={moveBannerStyle}>
          <div style={titleStyle}>Babel + ES6 + JSX</div>
        </div>
        <div ref={'scrollable'} style={contentStyle}>
          <div style={scrollerStyle}>
            <div style={wellStyle}>
              <div style={h3}>Modern JavaScript</div>
              <div style={p}>
                In the old days, you could just include a <code>{`<script>`}</code> tag in the header, and your JavaScript would run as intended. These days, we preprocess our JavaScript in order to access experimental features and language extensions like JSX.
              </div>
              <div style={p}>
                Babel is the main tool used to preprocess JavaScript. Babel is a highly configurable parser that lets you use experimental features and extensions, compiling down into old-style JavaScript that can be supported on a wider range of platforms. Of course, if a native platform doesn't support an ES6 feature like <code>Map()</code>, Babel won't fully be able to help -- but it can in many cases polyfill missing APIs to provide this functionality.
              </div>
            </div>
            <div style={wellStyle}>
              <div style={h3}>ES6</div>
              <div style={p}>
                Let's take a look at some of the new language features we'll be using, and how they get compiled through Babel.
              </div>
              <div style={h4}>Variable Declarations: <code>const</code> and <code>let</code></div>
              <div style={p}>
                Instead of using <code>var</code> to declare local variables, we use <code>const</code> and <code>let</code>. The main difference is that <code>var</code> is scoped to a function, while <code>const</code> and <code>let</code> are scoped to a block.
              </div>
              <div style={p}>
                Additionally, variables declared with <code>const</code> can only be assigned a value once. Assigning another value to the same name will throw a compiler error. Note that if the value assigned to a <code>const</code> variable is an object or array, the object or array may still be modified. In other words, it's only the variable name that is bound permanently -- the value itself is still mutable.
              </div>
              <EditorTranspiler
                value={[
                  `const a = 1`,
                  `let b = 'foo'`,
                  ``,
                  `// a = 2`,
                  ``,
                  `// b = 'bar'`,
                  ``,
                  `if (true) {`,
                  `  const a = 3`,
                  `}`,
                ]}
                inputHeader={
                  <div>
                    Using <code style={cmHeaderCodeStyle}>const</code> and <code style={cmHeaderCodeStyle}>let</code>
                  </div>
                }
                outputHeader={'Output compiled with Babel'}
              />
              <div style={p}>
                If you try uncommenting <code>a = 2</code> in the example above, Babel will throw a compiler error. This is because Babel prevents us from reassigning to a variable name declared with <code>const</code>. Assigning to <code>b</code> again is allowed, as the name was declared with <code>let</code>.
              </div>
              <div style={p}>
                You'll notice that the compiled output replaces <code>const</code> and <code>let</code> with <code>var</code>. You'll also notice that Babel transforms <code>const a = 3</code> into <code>var _a = 3</code>. This is so that your code can run on older platforms that don't support the new block-scoped variable declarations. It's the Babel compiler that enforces proper usage and block-scoping, rather than the runtime JavaScript engine.
              </div>
              <div style={h4}>Fat arrow functions</div>
              <EditorTranspiler
                value={[
                  `const foo = () => 'bar'`,
                  ``,
                  `const baz = (x) => {`,
                  `  return x + 1`,
                  `}`,
                ]}
                inputHeader={'Fat arrow functions'}
                outputHeader={'Output compiled with Babel'}
              />
              <div style={h4}>Destructuring</div>
              <div style={h4}>Classes</div>
              <div style={h4}>Imports and Exports</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
