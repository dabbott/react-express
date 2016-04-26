import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { EditorPlayer } from '../../components'

const defaultValue = `import React, { AppRegistry, View, Text } from 'react-native'

const App = () => {
  const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

  const textStyle = {
    backgroundColor: 'whitesmoke',
    color: 'teal',
    fontSize: 24,
    padding: 10,
  }

  return (
    <View style={style}>
      <Text style={textStyle}>Hello!</Text>
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)`

export default class View extends Component {
  render() {
    return (
      <Page
        title={'Text'}>
        <div style={styles.well}>
          <div style={styles.h3}>Text</div>
          <div style={styles.p}>
            <code>Text</code> is used to render text. Unlike on the web, text <i>must</i> be wrapped in a <code>{'<Text>'}</code> component.
          </div>
          <EditorPlayer
            value={defaultValue}
            inputHeader={'Using Text'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
