import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';

const Babel = require('babel-standalone')

const widgetContainerStyle = {
  margin: '20px 0px 30px 0px',
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
  paddingBottom: 10,
}

const outputHeaderStyle = {
  backgroundColor: 'white',
  color: 'rgba(0,0,0,0.8)',
  height: 40,
  paddingTop: 10,
  paddingLeft: 20,
  paddingBottom: 10,
}

export default class EditorTranspiler extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    if (typeof navigator !== 'undefined') {
      const value = typeof this.props.value === 'string' ? this.props.value :
          this.props.value.join('\n')
      const options = {
        value,
        mode: 'jsx',
        indentUnit: 2,
        lineNumbers: true,
        dragDrop: false,
        matchTags: {
          bothTags: true,
        },
        // matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        addModeClass: true,
        showCursorWhenSelecting: true,
        highlightSelectionMatches: true,
        theme: 'base16-light',
        extraKeys: {
          'Cmd-/': (cm) => {
            cm.listSelections().forEach((selection) => {
              const mode = cm.getModeAt(selection.from())
              switch (mode.name) {
                case 'xml':
                  cm.toggleComment({
                    lineComment: '//',
                  })
                  break
                case 'javascript':
                  cm.toggleComment({
                    lineComment: '//',
                  })
                  break
                default:
                  break
              }
            })
          },
        },
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
      require('codemirror/addon/display/panel.js')

      const readOnly = Object.assign({}, options, {
        readOnly: true,
        value: '',
        theme: 'read-only',
      })

      this.cm1 = require('codemirror')(this.refs.cmBlockScopedVariables, options)
      this.cm2 = require('codemirror')(this.refs.cmBlockScopedVariablesOutput, readOnly)

      this.cm1.on('changes', (cm) => {
        this.compile(cm)
      })

      this.compile(this.cm1)
    }
  }

  compile(cm) {
    try {
      if (this.panel) {
        this.panel.clear()
        delete this.panel
      }

      const code = Babel.transform(cm.getValue(), { presets: ['es2015', 'react'] }).code
      this.cm2.setValue(code)
    } catch (e) {
      const div = document.createElement('div')
      div.setAttribute('style', 'overflow: auto; border-top: 1px solid whitesmoke;')
      div.innerHTML = ReactDOM.renderToStaticMarkup(
        <div style={{
          color: '#ac4142',
          padding: '15px 20px',
          whiteSpace: 'pre',
          fontFamily: 'monospace',
        }}>
          {e.message.replace('unknown', e.name)}
        </div>
      )
      this.panel = this.cm2.addPanel(div, {
        position: 'bottom',
        replace: this.panel,
      })
    }
  }

  render() {
    const {inputHeader, outputHeader} = this.props

    return (
      <div style={widgetContainerStyle}>
        <div style={widgetStyle}>
          <div style={cmHeaderStyle}>{inputHeader}</div>
          <div ref={'cmBlockScopedVariables'} />
        </div>
        <div style={widgetStyle}>
          <div style={outputHeaderStyle}>{outputHeader}</div>
          <div ref={'cmBlockScopedVariablesOutput'} />
        </div>
      </div>
    )
  }
}
