import React, { Component } from 'react';
import { Link } from 'react-router'
import Page from './Page'
import styles from './styles'
import { WebPlayer, Author } from '../components'

const avatarItemFile = `import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connectStyle } from '@shoutem/theme'

const imageSource = {uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}

const AvatarText = connectStyle('com.example.AvatarText')(Text)

class AvatarItem extends Component {
  render() {
    const {style} = this.props

    return (
      <View style={[style.container, style]}>
        <Image
          style={style.avatarImage}
          source={imageSource}
        />
        <AvatarText style={style.title}>
          John Doe
        </AvatarText>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}

export default connectStyle('com.example.AvatarItem', styles)(AvatarItem)
`

const indexFile = `import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { StyleProvider, connectStyle } from '@shoutem/theme'

import AvatarItem from './AvatarItem'

const theme = {
  'com.example.AvatarItem': {

    '.selected': {
      backgroundColor: 'skyblue',

      'com.example.AvatarText': {
        color: 'white',
      }
    },
  }
}

class App extends Component {
  render() {
    return (
      <StyleProvider style={theme}>
        <View>
          <AvatarItem />
          <AvatarItem styleName={'selected'} />
          <AvatarItem />
          <AvatarItem />
        </View>
      </StyleProvider>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
`

const files = [
  ['index.js', indexFile],
  ['AvatarItem.js', avatarItemFile],
]

const vendorComponents = [
  ['@shoutem/theme', 'https://cdn.rawgit.com/dabbott/theme/f94c5c8c27fbdd673e3c0730730f8ab61d39613f/dist/shoutem-theme.js'],
]

export default class View extends Component {
  render() {
    return (
      <Page title={'Shoutem Themes'} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>
            {this.props.title}
            <Author url={'https://twitter.com/devinaabbott'}>
              @devinaabbott
            </Author>
          </div>
          <div style={styles.p}>
            Shoutem themes immitate the naming schemes and hierarchical selectors of CSS. If you're coming from React for web and prefer using CSS (or postcss, sass, etc) to inline styles, you'll feel right at home with Shoutem themes.
          </div>
          <div style={styles.p}>
            Shoutem UI includes a predefined theme with several variations for all components. You can read the full list of styles and supported CSS selectors <a href={'https://github.com/shoutem/ui/blob/develop/theme.js'}>here</a>. You can read more about theming in Shoutem in general <a href={'http://shoutem.github.io/docs/ui-toolkit/theme/introduction'}>here</a>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Shoutem Theme API</div>
          <div style={styles.h4}><code>StyleProvider</code></div>
          <div style={styles.p}>
            The Shoutem theme library exposes the <code>StyleProvider</code> component to handle passing our theme to every component that needs it. We'll generally use this to wrap the root component of our app, e.g. <code>{`<StyleProvider style={theme}> ... </StyleProvider>`}</code>.
          </div>
          <div style={styles.h4}><code>connectStyle(selector, styles)(Component) => Component</code></div>
          <div style={styles.p}>
            We use <code>connectStyle()</code> to specify a CSS-like selector for our component (e.g. <code>'com.name.Button'</code>) and to attach our styles (we don't need to use <code>StyleSheet.create()</code>) to our components so that they can be overriden by themes.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <div style={styles.p}>
            In this example, we'll connect default styles within our <code>AvatarItem</code> component, and then pass a global theme to our app to let us use CSS-like <code>styleName</code>s and override the default styles.
          </div>
          <div style={styles.p}>
            This example touches some more advanced concepts, so if you don't fully understand it, consider continuing on to <Link to={'data'}>data management</Link> and coming back later.
          </div>
          <div style={styles.h4}>Files</div>
          <div style={styles.p}>
            <ul>
              <li><code>index.js</code><br />Here we define our theme and provide to all components via <code>StyleProvider</code>. Notice that we define styles to apply to our <code>AvatarItem</code> when we give it the <code>selected</code> stylename. We also specify that any <code>AvatarText</code> children should be styled.<br /><br /></li>
              <li><code>AvatarItem.js</code><br /><code>AvatarItem</code> is connected to our theme with <code>connectStyle</code>. We can mix and match styles defined as plain objects and styles from our theme. Our themed styles are available directly on the object <code>this.props.style</code>. Our styles defined as plain objects, e.g. <code>container</code>, are available as <code>this.props.style.container</code>. Notice how we have to connect <code>AvatarText</code> in order for it to use styles defined as part of our theme.<br /><br /></li>
            </ul>
          </div>
          <WebPlayer
            files={files}
            vendorComponents={vendorComponents}
          />
        </div>
      </Page>
    )
  }
}
