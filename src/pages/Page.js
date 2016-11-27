import React, { Component } from 'react'
import Helmet from 'react-helmet'
import createStyles, { responsive } from 'react-styles-provider'

import styles from './styles'

@responsive()
@createStyles({
  scroller: {
    borderTop: '1px solid rgba(220,220,220,0.5)',
    backgroundColor: 'white',
    padding: 40,
  },
  footer: {
    marginTop: 20,
    padding: ({responsive}) => responsive.match('mobile') ? 20 : 60,
    backgroundColor: 'rgb(250,250,250)',
  },
})
export default class Page extends Component {

  static defaultProps = {
    shouldUpdatePageTitle: true,
  }

  state = {
    scrollTop: 0,
  }

  componentDidMount() {
    const {scrollable} = this.refs

    scrollable && scrollable.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    const {scrollable} = this.refs

    scrollable && scrollable.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      scrollTop: this.refs.scrollable.scrollTop,
    })
  }

  renderFooter() {
    const {styles, footer} = this.props

    return footer && (
      <div style={styles.footer}>
        {footer}
      </div>
    )
  }

  renderMobile() {
    const {children} = this.props

    return (
      <div style={{paddingTop: 40}}>
        {children}
        {this.renderFooter()}
      </div>
    )
  }

  render() {
    const {children, title, subtitle, bannerHeight, logo, shouldUpdatePageTitle, responsive} = this.props

    if (responsive.match('mobile')) {
      return this.renderMobile()
    }

    const moveBannerStyle = {
      ...styles.banner,
      top: - this.state.scrollTop / 1.8,
      height: bannerHeight || 200,
    }

    const contentStyle = {
      ...styles.content,
      paddingTop: bannerHeight || 200,
    }

    return (
      <div style={styles.container}>
        {shouldUpdatePageTitle && <Helmet title={title} />}
        <div style={moveBannerStyle}>
          <div style={styles.title}>{title}</div>
          {subtitle && (
            <div style={styles.subtitle}>{subtitle}</div>
          )}
          {logo && (
            <img
              style={{paddingTop: 40}}
              src={`${logo}.png`}
              srcSet={`${logo}.png 1x, ${logo}@2x.png 2x`}
            />
          )}
        </div>
        <div ref={'scrollable'} style={contentStyle}>
          <div style={this.props.styles.scroller}>
            {children}
          </div>
          {this.renderFooter()}
        </div>
      </div>
    )
  }
}
