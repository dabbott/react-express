import React, { Component } from 'react'
import { Player } from '../../components'

export default class extends Component {
  render() {
    return (
      <Player
        id={this.props.params.sandboxId}
      />
    )
  }
}
