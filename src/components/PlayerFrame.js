import React, { Component } from 'react'

export default class extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: Math.random().toString().slice(2)
    }

    this.status = 'loading'
    this.code = null
  }

  componentDidMount() {
    window.onmessage = (e) => {
      let data
      try {
        data = JSON.parse(e.data)
      } catch (err) {
        return
      }

      const {id, type} = data

      if (id !== this.state.id) {
        return
      }

      switch (type) {
        case 'ready':
          this.status = 'ready'
          if (this.code) {
            this.runApplication(this.code)
            this.code = null
          }
          break
        default:
      }
    }
  }

  runApplication(code) {
    switch (this.status) {
      case 'loading':
        this.code = code
        break
      case 'ready':
        this.refs.iframe.contentWindow.postMessage(code, '*')
        break
      default:
    }
  }

  render() {
    return (
      <iframe
        ref={'iframe'}
        frameBorder={0}
        width={300}
        height={500}
        src={`sandbox/${this.state.id}`}
      />
    )
  }
}
