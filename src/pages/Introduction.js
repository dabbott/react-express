import React, { Component } from 'react'
import { Link } from 'react-router'

import Page from './Page'
import styles from './styles'
import { GithubCorner, Author } from '../components'

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
}

export default class extends Component {
  render() {
    return (
      <Page
        footer={this.props.footer}
        title={'React Native Express'}
        subtitle={'Learn React Native, the cross-platform app framework'}
        logo={'logo'}
        bannerHeight={560}
        shouldUpdatePageTitle={false}
      >
        <GithubCorner />
        <div style={styles.well}>
          <div style={styles.h3}>
            Learning React Native
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            React Native is a framework for building cross-platform apps.
          </div>
          <div style={styles.p}>
            Building with React Native is extremely efficient and highly addictive - but getting started can be a little tricky. You should use this guide as a companion to the official Facebook documentation for <a href={'https://facebook.github.io/react-native/docs/getting-started.html'}>
              getting started
            </a>. The Facebook guide assumes some existing knowledge about React development for the web. If you run into topics that aren't covered thoroughly, e.g. how Babel works, play with the examples in this guide to quickly get up to speed. This guide also covers related topics, such as Redux, which are beyond the scope of the React Native docs.
          </div>
          <div style={styles.p}>
            This guide uses <a href={'https://github.com/dabbott/react-native-web-player'}>react-native-web-player</a> to provide interactive examples in your browser. The web player is built on the awesome project <a href={'https://github.com/necolas/react-native-web'}>react-native-web</a>.
          </div>
          <div>
            I hope you enjoy learning React Native. Reach out to me, <a href={'https://twitter.com/devinaabbott'}>@devinaabbott</a>, with comments or questions you have along the way. Some pages are written by other authors (listed at top of each page), so feel free to contact them too.
          </div>
        </div>
        <div style={styles.well}>
          <Link to={'start'} style={buttonStyle}>
            Let's get started!
          </Link>
        </div>
      </Page>
    )
  }
}
