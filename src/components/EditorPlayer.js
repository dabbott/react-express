import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';
import Player from './Player'
import { options, requireAddons } from '../constants/CodeMirror'

const Babel = require('babel-standalone')

const widgetContainerStyle = {
  margin: '20px 0px 30px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  height: 450,
  minWidth: 0,
  minHeight: 0,
}

const widgetStyle = {
  // width: 'calc(50%)',
  // display: 'inline-block',
  flex: '0 0 calc(100% - 300px)',
  // position: 'relative',
  minWidth: 0,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
}

const playerContainerStyle = {
  flex: '0 0 300px',
  minWidth: 0,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}

const cmHeaderStyle = {
  backgroundColor: 'rgb(245,245,245)',
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

      this.cm1.setSize('100%', '360')

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
      if (this.panel) {
        this.panel.clear()
        delete this.panel
      }

      const code = Babel.transform(cm.getValue(), { presets: ['es2015', 'react'] }).code

      return code
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
      this.panel = this.cm1.addPanel(div, {
        position: 'bottom',
        replace: this.panel,
      })
    }

    return null
  }

  render() {
    const {inputHeader} = this.props

    return (
      <div style={widgetContainerStyle}>
        <div style={widgetStyle}>
          <div style={cmHeaderStyle}>{inputHeader}</div>
          <div style={{height: 410}} ref={'editor'} />
        </div>
        <div style={playerContainerStyle}>
          <Player ref={'player'} />
        </div>
      </div>
    )
  }
}
