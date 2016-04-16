import React, { Component } from 'react';
import styles from './styles'

export default class Page extends Component {
  constructor() {
    super()
    this.state = {
      scrollTop: 0,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.refs.scrollable.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.refs.scrollable.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({
      scrollTop: this.refs.scrollable.scrollTop,
    })
  }

  render() {
    const {children, title} = this.props

    const moveBannerStyle = Object.assign({}, styles.banner, {
      top: - this.state.scrollTop / 1.8,
    })

    return (
      <div style={styles.container}>
        <div style={moveBannerStyle}>
          <div style={styles.title}>{title}</div>
        </div>
        <div ref={'scrollable'} style={styles.content}>
          <div style={styles.scroller}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
