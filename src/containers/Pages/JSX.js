import React, { Component } from 'react';
import { EditorTranspiler } from '../../components'
import Page from './Page'
import styles from './styles'

const jsxExample = `const a = <View />

const b = (
  <View
    foo='hello'
    bar={baz}>
    <Text>42</Text>
  </View>
)`

export default class extends Component {
  render() {
    return (
      <Page title={'JSX'}>
        <div style={styles.well}>
          <div style={styles.h3}>JSX</div>
          <div style={styles.p}>
            JSX is an extension to JavaScript that adds a new kind of <b>expression</b>. You can use JSX expressions anywhere you could use any other expression.
          </div>
          <div style={styles.p}>
            JSX is a shortcut for using the <code>React.createElement()</code> API, that is much more concise, easy to read, and visually looks a little like the generated UI (as both are tree-like). You don't <i>have to</i> use JSX, but there are practically no disadvantages, so you probably should use it.
          </div>
          <div style={styles.p}>
            JSX is tag-based like XML. Each tag, like <code>{'<View />'}</code>, is transformed into a call to <code>React.createElement()</code>. Any attributes become <code>props</code> of the instantiated component. Attributes can be strings like <code>foo='hello'</code>, or they can be interpolated JavaScript expressions when wrapped in curly braces as in <code>{'bar={baz}'}</code> (which would refer to the variable baz).
          </div>
          <div style={styles.p}>
            Tags can be self-closing, like <code>{'<View />'}</code>, or they can include both an opening and closing tag, like <code>{'<View></View>'}</code>. To include children elements, you will need to use an opening and closing tag and put the children tags within.
          </div>
          <EditorTranspiler
            value={jsxExample}
            inputHeader={'JSX'}
            outputHeader={'Output compiled with Babel'}
          />
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
