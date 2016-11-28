import React, { Component } from 'react'
import { Link } from 'react-router'

import { EditorTranspiler } from '../components'
import Page from './Page'
import styles from './styles'

const importExample = `// import the default export
import React from 'react-native'

// import other named exports
import {View, Text, Image} from 'react-native'

// import default and others simultaneously
// import React, {View, Text, Image} from 'react-native'`

const exportExample = `export default React
export {View, Text, Image}`

export default class ImportsAndExports extends Component {
  render() {
    return (
      <Page title={this.props.title} footer={this.props.footer}>
        <div style={styles.well}>
          <div style={styles.h3}>{this.props.title}</div>
          <div style={styles.p}>
            ES6 provides a more advanced module importing/exporting pattern than the widely used CommonJS pattern. By contrast to the old <code>{'module.exports = {...}'}</code>, we can now export multiple named values. Similarly, we can import multiple named values.
          </div>
          <div style={styles.p}>
            There is one default export per file, and this exported value can be imported without refering to it by name. Every other import and export must be named.
          </div>
          <div style={styles.p}>
            If you attempt to import an older CommonJS module using the new import syntax, Babel will handle the difference in format automatically at runtime. An old-style module won't have the special <code>{'__esModule'}</code> property added by Babel upon export.
          </div>
          <EditorTranspiler
            code={importExample}
            title={'Importing'}
          />
          <div style={styles.p}>
            The imports in the previous example would be available if exported from the module <code>react-native</code> as in the next example.
          </div>
          <EditorTranspiler
            code={exportExample}
            title={'Exporting'}
          />
          <div style={styles.p}>
            For full details on the importing/exporting syntax, see the MDN reference for <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import'}>import</a> and <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export'}>export</a>.
          </div>
        </div>
      </Page>
    )
  }
}
