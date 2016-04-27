import React, { Component } from 'react'
import { Player } from '../../components'
import { asyncConnect } from 'redux-async-connect'

@asyncConnect([{
  promise: () => Promise.resolve()
}])
export default class extends Component {
  render() {
    return (
      <Player
        id={this.props.params.sandboxId}
      />
    )
  }
}
