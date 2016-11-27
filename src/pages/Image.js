import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('App', () => App)
`

export default class View extends Component {
  render() {
    return (
      <Page footer={this.props.footer} title={'Image'}>
        <div style={styles.well}>
          <div style={styles.h3}>Image</div>
          <div style={styles.p}>
            <code>Image</code> is used to render images. Images may either be bundled with the app as assets, or downloaded from the web.
          </div>
          <div style={styles.p}>
            To bundle an image in the app, <code>require()</code> the image file just as you would any other file. When loading bundled images, the same images are used to render on both iOS and Android. Writing <code>require('./test.png')</code> will choose the most appropriate image for the device size: <code>test.png</code>, <code>test.png@2x</code>, or <code>test.png@3x</code>.
          </div>
          <div style={styles.p}>
            For images downloaded from the web, layout works differently than for most other elements. Since the dimensions of the image aren't known until the image is downloaded, images can't be automatically stretched with <code>{'flex: 1'}</code>. Instead, you must specify dimensions in the style prop, e.g. <code>{'style={{width: 100, height: 100}}'}</code>. React Native is evolving quickly, however, and this behavior may change - when in doubt, try a few different layouts and see what happens!
          </div>
          <WebPlayer code={code} />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
