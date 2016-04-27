import React, { Component } from 'react'

export default class extends Component {

  static defaultProps = {
    height: 600,
    width: 400,
  }

  constructor(props) {
    super(props)

    this.state = {
      id: null,
    }

    this.status = 'loading'
    this.code = null
  }

  componentDidMount() {
    this.setState({
      id: Math.random().toString().slice(2)
    })

    window.addEventListener('message', (e) => {
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
    })
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
    const {width, height} = this.props
    const {id} = this.state

    return id && (
      <iframe
        ref={'iframe'}
        frameBorder={0}
        width={width}
        height={height}
        src={`sandbox/${id}`}
      />
    )
  }
}
