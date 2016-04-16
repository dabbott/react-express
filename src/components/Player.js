import React, { Component } from 'react';
import { AppRegistry } from 'react-native-web'

import Phone from './Phone'


// // Styles
// const styles = StyleSheet.create({
//   card: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     backgroundColor: 'teal',
//   },
//   title: {
//     fontSize: '1.25rem',
//     fontWeight: 'bold',
//   },
//   image: {
//     height: 300,
//     marginVertical: 10,
//     width: 300,
//   }
// })
//
// // Components
// const Card = ({ children }) => <View style={styles.card}>{children}</View>
// const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
// const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
// const App = () => (
//   <Card>
//     <Title>App Card</Title>
//     <Photo uri="logo.jpg" />
//   </Card>
// )
//
// // App registration and rendering
// AppRegistry.registerComponent('MyApp', () => App)

export default class Player extends Component {

  static defaultProps = {
    code: '',
  }

  componentDidMount() {
    const {code} = this.props

    this.runApplication(code)
  }

  runApplication(code) {
    const screenElement = this.refs.phone.getScreenNode()

    this.evaluate(code)

    try {
      AppRegistry.runApplication('MyApp', {
        rootTag: screenElement,
      })
    } catch (e) {
      console.log('Failed to run MyApp', e)
    }
  }

  evaluate(code) {
    window._ReactNative = require('react-native-web')

    const wrapped = `
    var require = function(name) {
      if (name === 'react-native') {
        return window._ReactNative;
      } else {
        return {};
      }
    };

    var exports = {};

    (function(module, exports, require) {
      ${code}
    })({ exports: exports }, exports, require);
    ;
    `

    eval(wrapped)
  }

  render() {
    return (
      <Phone ref={"phone"} />
    )
  }
}
