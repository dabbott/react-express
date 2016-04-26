import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { EditorPlayer } from '../../components'

const defaultValue = `import React, { AppRegistry, View } from 'react-native'

const App = () => {
  const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
  }

  return (
    <View style={style}>
      <View style={boxStyle} />
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)`

export default class View extends Component {
  render() {
    return (
      <Page
        title={'View'}>
        <div style={styles.well}>
          <div style={styles.h3}>View</div>
          <div style={styles.p}>
            <code>View</code>s are the most basic building block of React Native apps, much like how <code>div</code>s are the most basic building block of websites. In terms of implementation, <code>View</code> is an abstraction layer on top of the target platform's native equivalent, whether that's <code>UIView</code>, <code>android.view</code>, <code>{'<div>'}</code>, or something else.
          </div>
          <div style={styles.p}>
            <code>View</code>s are primarily used for styling and layout of children elements. Let's look at a few of the styles we can apply to views. The example below contains two <code>View</code>s: the outer view which specifies the alignment of the content contained within, and the inner view which draws a blue square.
          </div>
          <EditorPlayer
            value={defaultValue}
            inputHeader={'Using Views'}
          />
          <div style={styles.p}>
            Below you can find the most common styles. Feel free to experiment with them in the example code.
          </div>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Layout Styles</div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>flex</code></td>
                <td><code>number</code></td>
                <td>What proportion of the available space should this element expand to fill? 0 means the element doesn't expand.</td>
              </tr>
              <tr>
                <td><code>flexDirection</code></td>
                <td><code>string</code></td>
                <td>Do you want a vertical (<code>column</code>) or horizontal (<code>row</code>) layout? This choice determines the orientation of the <b>primary axis</b> of your layout. One of: <code>row, column</code>.</td>
              </tr>
              <tr>
                <td><code>justifyContent</code></td>
                <td><code>string</code></td>
                <td>How should the content be distributed along the <b>primary axis</b> of your layout? Should it be at the start, the center, the end, or spaced evenly? One of: <code>flex-start, center, flex-end, space-around, space-between</code>.</td>
              </tr>
              <tr>
                <td><code>alignItems</code></td>
                <td><code>string</code></td>
                <td>How should the content be aligned along the <b>secondary axis</b> of your layout? (If the primary axis is <code>row</code>, then the secondary axis is <code>column</code>, and vice versa) Should content be aligned at the start, the center, the end, or stretched to fill? One of: <code>flex-start, center, flex-end, stretch</code>.</td>
              </tr>
              <tr>
                <td><code>width</code></td>
                <td><code>number</code></td>
                <td>A fixed width</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td><code>number</code></td>
                <td>A fixed height</td>
              </tr>
              <tr>
                <td><code>margin</code></td>
                <td><code>number</code></td>
                <td>How much space should separate this element from other adjacent elements? For more granular control, use the properties: <code>marginTop, marginBottom, marginLeft, marginRight</code>.</td>
              </tr>
              <tr>
                <td><code>padding</code></td>
                <td><code>number</code></td>
                <td>How much padding should be within this element before its children are shown? For more granular control, use the properties: <code>paddingTop, paddingBottom, paddingLeft, paddingRight</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={styles.well}>
          <div style={styles.h3}>Visual Styles</div>
          <table className={'table'}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>backgroundColor</code></td>
                <td><code>string</code></td>
                <td>The background color</td>
              </tr>
              <tr>
                <td><code>borderWidth</code></td>
                <td><code>number</code></td>
                <td>The border width. For more granular control, use the properties: <code>borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth</code>.</td>
              </tr>
              <tr>
                <td><code>borderColor</code></td>
                <td><code>string</code></td>
                <td>The color of the border. For more granular control, use the properties: <code>borderTopColor, borderBottomColor, borderLeftColor, borderRightColor</code>.</td>
              </tr>
              <tr>
                <td><code>borderRadius</code></td>
                <td><code>number</code></td>
                <td>Rounded edges</td>
              </tr>
              <tr>
                <td><code>opacity</code></td>
                <td><code>number</code></td>
                <td>How transparent should this element be? 0 means fully transparent, 1 means fully opaque.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={styles.well}>
          {this.props.navigatorButton}
        </div>
      </Page>
    )
  }
}
