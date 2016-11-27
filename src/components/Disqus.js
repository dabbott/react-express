import React, { Component } from 'react'
import DisqusThread from 'react-disqus-thread'

const dev = process.env.NODE_ENV === 'development'

export default class Disqus extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {identifier, title, url} = this.props

    if (dev) {
      return (
        <DisqusThread
          shortname={"reactnativeexpress"}
          identifier={'development'}
          title={'Development Title'}
          url={'http://localhost:3210/development'}
        />
      )
    }

    return (
      <DisqusThread
        shortname={"reactnativeexpress"}
        identifier={identifier}
        title={title}
        url={url}
      />
    )
  }
}
