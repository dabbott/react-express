import React, { Component, PropTypes } from 'react'

import Root from './Root'

export default class App extends Component {
  static childContextTypes = {
    location: PropTypes.string,
  }

  getChildContext() {
    const {location} = this.props

    return {location}
  }

  render() {
    return (
      <Root />
    )
  }
}
