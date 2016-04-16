import React, { Component } from 'react';

const Babel = require('babel-standalone')

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
  paddingTop: 15,
  paddingBottom: 15,
}

const h4 = {
  fontSize: 14,
  fontWeight: 500,
  paddingTop: 5,
  paddingBottom: 15,
}

const p = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
  marginBottom: 15
}

const widgetContainerStyle = {
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  height: 330,
  minWidth: 0,
  minHeight: 0,
}

const widgetStyle = {
  // width: 'calc(50%)',
  // display: 'inline-block',
  flex: '0 0 50%',
  // position: 'relative',
  minWidth: 0,
  minHeight: 0,
}

const cmHeaderStyle = {
  backgroundColor: 'rgb(245,245,245)',
  color: 'rgba(0,0,0,0.8)',
  height: 40,
  paddingTop: 10,
  paddingLeft: 20,
  // opacity: 0.95,
}

const cmHeaderCodeStyle = {
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  color: 'rgba(0,0,0,0.8)'
}

const cmSpacerStyle = {
  backgroundColor: 'rgb(245,245,245)',
  height: 10,
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
    if (typeof navigator !== 'undefined') {
      const value = 'const a = 1\nlet b = 2'
      const options = {
        value,
        mode: 'jsx',
        indentUnit: 2,
        lineNumbers: true,
        dragDrop: false,
        matchTags: {
          bothTags: true,
        },
        matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        addModeClass: true,
        showCursorWhenSelecting: true,
        highlightSelectionMatches: true,
        theme: 'base16-light',
      }
      require('codemirror/mode/jsx/jsx')
      require('codemirror/addon/fold/xml-fold')
      require('codemirror/addon/edit/matchtags')
      require('codemirror/addon/edit/matchbrackets')
      require('codemirror/addon/edit/closetag')
      require('codemirror/addon/edit/closebrackets')
      require('codemirror/addon/search/searchcursor')
      require('codemirror/addon/search/search')
      require('codemirror/addon/search/match-highlighter.js')
      require('codemirror/addon/comment/comment')
      require('codemirror/addon/hint/show-hint')
      require('codemirror/addon/hint/anyword-hint')
      require('codemirror/addon/selection/active-line')

      const readOnly = Object.assign({}, options, {
        readOnly: true,
        value: Babel.transform(value, { presets: ['es2015'] }).code,
      })

      this.cm1 = require('codemirror')(this.refs.cmBlockScopedVariables, options)
      this.cm2 = require('codemirror')(this.refs.cmBlockScopedVariablesOutput, readOnly)

      this.cm1.on('changes', (cm) => {
        this.cm2.setValue(Babel.transform(cm.getValue(), { presets: ['es2015'] }).code)
      })
    }

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
            </div>
            <div style={widgetContainerStyle}>
              <div style={widgetStyle}>
                <div style={cmHeaderStyle}>Using <code style={cmHeaderCodeStyle}>const</code> and <code style={cmHeaderCodeStyle}>let</code></div>
                <div style={cmSpacerStyle} />
                <div ref={'cmBlockScopedVariables'} />
              </div>
              <div style={widgetStyle}>
                <div style={cmHeaderStyle}>Output compiled with Babel</div>
                <div style={cmSpacerStyle} />
                <div ref={'cmBlockScopedVariablesOutput'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
