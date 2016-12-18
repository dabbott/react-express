import React, { Component } from 'react';
import { Link } from 'react-router'
import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const timingDriverExample = `import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Easing,
  Dimensions,
} from 'react-native'
import { TimingDriver, FadeIn } from '@shoutem/animation'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

class App extends React.Component {

  driver = new TimingDriver({
    duration: 1000,    // default: 250
    easing: Easing.in, // default: Easing.cubic
    delay: 200,        // default: 0
  })

  runAnimation = () => this.driver.runTimer(1)

  resetAnimation = () => this.driver.runTimer(0)

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.runAnimation}
        >
          <Text>Run Animation</Text>
        </TouchableOpacity>
        <FadeIn driver={this.driver}>
          <Image
            style={styles.image}
            source={imageSource}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.resetAnimation}
          >
            <Text>Reset Animation</Text>
          </TouchableOpacity>
        </FadeIn>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 15,
    padding: 30,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
})

AppRegistry.registerComponent('App', () => App)
`

const scrollDriverExample = `import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {
  FadeOut,
  FadeIn,
  ZoomOut,
  ZoomIn,
  ScrollDriver,
} from '@shoutem/animation'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

class App extends Component {

  driver = new ScrollDriver()

  renderHeader = () => {
    const {driver} = this

    return (
      <FadeIn style={styles.header} driver={driver} inputRange={[100, 300]}>
        <Image style={styles.thumbnail} source={imageSource} />
        <Text>Hello World</Text>
      </FadeIn>
    )
  }

  renderScrollView = () => {
    const {driver} = this

    return (
      <ScrollView {...driver.scrollViewProps}>
        <View style={styles.content}>
          <ZoomIn driver={driver} inputRange={[100, 300]}>
            <FadeOut driver={driver} inputRange={[100, 300]}>
              <Image style={styles.image} source={imageSource}>
                <Text style={styles.text}>
                  Hello World
                </Text>
              </Image>
            </FadeOut>
          </ZoomIn>
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScrollView()}
        {this.renderHeader()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 1000,
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
  },
  header: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 60,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    color: 'white',
  }
});

AppRegistry.registerComponent('App', () => App);
`

const vendorComponents = [
  ['@shoutem/animation', 'https://cdn.rawgit.com/dabbott/animation/496810888db6cc0bc19c0d3abbcc9a4de8e8a0dc/dist/shoutem-animation.js'],
]

export default class View extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            Shoutem animations are built from with two parts: a <code>Driver</code> and an <code>Animation Component</code>
          </div>
          <div style={styles.h4}>Driver</div>
          <div style={styles.p}>
            A <code>Driver</code> automatically modifies a value, such as a number or color, in response to external changes: time, scroll position, touch position, etc. This value can then be connected to a component's styles, to modify position, layout, color, etc, based on the external changes.
          </div>
          <div style={styles.p}>
            In terms of implementation, a <code>Driver</code> is a minimal wrapper around an <code>Animated.Value</code> (more on <code>Animated</code> in a <Link to={'animated'}>later chapter</Link>). To get a better understanding of drivers, take a look at the <code><a href={'https://github.com/shoutem/animation/blob/develop/src/drivers/TimingDriver.js'}>TimingDriver</a></code>, which is only ~20 lines of code.
          </div>
          <div style={styles.h4}>Animation Component</div>
          <div style={styles.p}>
            Shoutem ships with a handful of premade animation components:
          </div>
          <ul>
            <li><code>FadeIn</code></li>
            <li><code>FadeOut</code></li>
            <li><code>ZoomIn</code></li>
            <li><code>ZoomOut</code></li>
            <li><code>Parallax</code></li>
          </ul>
          <div style={styles.p}>
            These components will animate their <code>children</code>, according to the <code>Driver</code> used. To use one of these components, you must first create a driver, such as a <code>TimingDriver</code>, and then pass it to the animation component as the prop <code>driver</code>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>TimingDriver Example</div>
          <div style={styles.p}>
            Let's take a look at a simple example: fading a component in based on time.
          </div>
          <div style={styles.p}>
            The <code>Driver</code> API is imperative, so we must create an instance of a driver and call <code>runTimer</code> to use it.
          </div>
          <div style={styles.p}>
            In this example, we'll create our driver with <code>new TimingDriver</code>, passing (optionally) a <code>duration</code>, <code>delay</code>, and <code>easing</code> function. Since the driver doesn't directly affect rendering, it's more idiomatic to make it an instance variable of the component (accessible via <code>this.driver</code>) than to put it in the component's <code>state</code>.
          </div>
          <div style={styles.p}>
            We must then start the animation with <code>runTimer(progress)</code>. Timing animations represent their progress in the range of values [0, 1]. To run an animation to completion, call <code>runTimer(1)</code>. To run it halfway, <code>runTimer(0.5)</code>. You may call <code>runTimer</code> multiple times with different progresses, including going back to the start with <code>runTimer(0)</code>.
          </div>
          <div style={styles.p}>
            The last step is to connect our driver to our <code>FadeIn</code> component as a prop: <code>{'<FadeIn driver={this.driver}>...</FadeIn>'}</code>.
          </div>
          <WebPlayer
            title={'TimingDriver'}
            code={timingDriverExample}
            vendorComponents={vendorComponents}
          />
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>ScrollDriver Example</div>
          <div style={styles.p}>
            Let's take a look at another example: zooming and fading components in and out based on scroll position. There are a few key differences from the <code>TimingDriver</code> example.
          </div>
          <div style={styles.p}>
            First, our <code>ScrollDriver</code> controls the progress of animations based on the scroll position of our <code>ScrollView</code>, so we must feed the scroll position into our <code>ScrollDriver</code>. To connect our <code>ScrollDriver</code> to our <code>ScrollView</code>, we spread <code>driver.scrollViewProps</code> into the <code>ScrollView</code>'s props.
          </div>
          <div style={styles.p}>
            Second, the input to the animation is no longer within the range [0, 1]. The input is a scroll position, so we must specify the start and end range with the <code>inputRange</code> prop on our animation components. We might say <code>{'inputRange={[100, 200]}'}</code> to start our animation at scroll position 100, and end it at scroll position 200.
          </div>
          <WebPlayer
            title={'ScrollDriver'}
            code={scrollDriverExample}
            vendorComponents={vendorComponents}
          />
        </div>
      </Page>
    )
  }
}
