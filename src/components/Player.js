import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Phone from './Phone'

export default class Player extends Component {

  static defaultProps = {
    code: '',
    onRun: () => {},
    onError: () => {},
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.onmessage = (e) => {
      this.runApplication(e.data)
    }

    // window.onerror = (e) => {
    //   console.warn('ERROR', e)
    //   parent.postMessage(JSON.stringify({
    //     id: this.props.id,
    //     type: 'error',
    //     payload: e,
    //   }), '*')
    // }

    parent.postMessage(JSON.stringify({
      id: this.props.id,
      type: 'ready',
    }), '*')
  }

  runApplication(code) {
    const {AppRegistry} = require('react-native-web')

    const screenElement = this.refs.phone.getScreenNode()

    this.resetApplication()

    this.props.onRun()

    try {
      this.evaluate(code)

      AppRegistry.runApplication('MyApp', {
        rootTag: screenElement,
      })
    } catch (e) {
      // console.log('Failed to run MyApp', e)
      this.props.onError(e)
    }
  }

  resetApplication() {
    const screenElement = this.refs.phone.getScreenNode()

    ReactDOM.unmountComponentAtNode(screenElement)
  }

  evaluate(code) {
    window._ReactNative = require('react-native-web')

    const wrapped = `
    var require = function(name) {
      if (name === 'react-native') {
        return window._ReactNative;
      } else {
        return {};
      }
    };

    var exports = {};

    (function(module, exports, require) {
      ${code}
    })({ exports: exports }, exports, require);
    ;
    `

    eval(wrapped)
  }

  render() {
    return (
      <Phone ref={"phone"} />
    )
  }
}
