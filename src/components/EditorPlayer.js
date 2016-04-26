import React, { Component } from 'react';
// import ReactDOM from 'react-dom/server';
import PlayerFrame from './PlayerFrame'
import { options, requireAddons } from '../constants/CodeMirror'

const Babel = require('babel-standalone')

const playerWidth = 400
const editorHeight = 600

const widgetContainerStyle = {
  margin: '20px 0px 30px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  minWidth: 0,
  minHeight: 0,
}

const widgetStyle = {
  // width: 'calc(50%)',
  // display: 'inline-block',
  flex: `0 0 calc(100% - ${playerWidth}px)`,
  // position: 'relative',
  minWidth: 0,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
}

const playerContainerStyle = {
  flex: `0 0 ${playerWidth}px`,
  minWidth: 0,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
}

const cmHeaderStyle = {
  backgroundColor: 'rgb(245,245,245)',
  color: 'rgba(0,0,0,0.8)',
  height: 40,
  paddingTop: 10,
  paddingLeft: 20,
  paddingBottom: 10,
}

const errorContainerStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  overflow: 'auto',
  borderTop: '1px solid whitesmoke',
  color: '#ac4142',
  padding: '15px 20px',
  whiteSpace: 'pre',
  fontFamily: 'monospace',
  zIndex: 1,
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

      requireAddons()

      this.cm1 = require('codemirror')(
        this.refs.editor,
        Object.assign({}, options, {
          value,
        })
      )

      this.cm1.on('changes', (cm) => {
        this.runApplication(cm)
      })

      this.cm1.setSize('100%', '' + editorHeight)

      this.runApplication(this.cm1)
    }
  }

  runApplication(code) {
    const compiled = this.compile(code)

    if (compiled) {
      this.refs.player.runApplication(compiled)
    }
  }

  compile(cm) {
    try {
      const code = Babel.transform(cm.getValue(), { presets: ['es2015', 'react'] }).code

      this.setState({
        compilerError: null
      })

      return code
    } catch (e) {
      this.setState({
        compilerError: e.message.replace('unknown', e.name)
      })
    }

    return null
  }

  renderError() {
    const {compilerError, runtimeError} = this.state
    const e = compilerError || runtimeError

    if (e) {
      return (
        <div style={errorContainerStyle}>
          {e}
        </div>
      )
    }

    return null
  }

  render() {
    const {inputHeader} = this.props

    return (
      <div style={widgetContainerStyle}>
        <div style={widgetStyle}>
          <div style={cmHeaderStyle}>{inputHeader}</div>
          <div style={{height: editorHeight}} ref={'editor'} />
        </div>
        <div style={playerContainerStyle}>
          {this.renderError()}
          <PlayerFrame ref={'player'}
            width={playerWidth}
            height={editorHeight}
            onRun={() => {
              this.setState({runtimeError: null})
            }}
            onError={(e) => {
              this.setState({runtimeError: e})
            }}/>
        </div>
      </div>
    )
  }
}
