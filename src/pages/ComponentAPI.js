import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { WebPlayer } from '../components'

const code = `import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('App', () => App)
`

export default class extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>Component API</div>
          <div style={styles.h4_monospace}>this.props</div>
          <div style={styles.p}>
            <code>Components</code> can be configured upon instantiation by passing properties to the <code>constructor</code> - these properties are called <code>props</code>. <code>props</code> may be accessed from within the component's methods as <code>this.props</code>, in order to alter how the component is rendered and/or how it behaves. However, <code>props</code> must <b>not be altered</b> from within the component's methods.
          </div>
          <div style={styles.p}>
            A parent element may alter a child element's <code>props</code> at any time. The child element will generally re-render itself to reflect its new configuration parameters. A child component may decide not to re-render itself even though its configuration has changed, as determined by <code>shouldComponentUpdate()</code> (more on this in the Component Lifecycle API section).
          </div>
          <div style={styles.h4_monospace}>this.state</div>
          <div style={styles.p}>
            <code>Components</code> may maintain their state internally within the object <code>state</code>. <code>this.state</code> may be accessed from within component methods. Unlike <code>props</code>, parent elements may not access a child's <code>state</code>, as it is intended to manage the child's internal state rather than external configuration.
          </div>
          <div style={styles.p}>
            Note that you should <i>never</i> directly assign to a specific key within the <code>state</code> object, e.g. <code>this.state.foo = 'bar'</code>, but instead use the method <code>this.setState()</code>.
          </div>
          <div style={styles.h4_monospace}>this.setState(object newState)</div>
          <div style={styles.p}>
            <code>Components</code> may update their <code>state</code> by passing an object to the method <code>this.setState()</code>. Any keys in the object passed to the method will be merged into (and override any existing keys in) <code>this.state</code>.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Example</div>
          <div style={styles.p}>
            The following example includes a <code>Counter</code> component that maintains the elapsed time internally as <code>state.count</code>. The <code>App</code> component renders the <code>Counter</code> component with two <code>props</code>: <code>size</code> and <code>color</code>. The <code>App</code> can easily render several <code>Counter</code> components with different sizes and colors.
          </div>
          <WebPlayer code={code} />
        </div>
      </Page>
    )
  }
}
