import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const code = `import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
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
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})

AppRegistry.registerComponent('App', () => App)
`;

const content = markdown(markdownOptions)`
\`View\`s are the most basic building blocks of React Native apps, much like how \`div\`s are the most basic building blocks of websites. In terms of implementation, \`View\` is an abstraction layer on top of the target platform's native equivalent, whether that's \`UIView\`, \`android.view\`, \`${"<div>"}\`, or something else.

\`View\`s are primarily used for styling and layout of children elements. Let's look at a few of the styles we can apply to views. The example below contains two \`View\`s: the outer view which specifies the alignment of the content contained within, and the inner view which draws a blue square.

${<WebPlayer code={code} />}

Below you can find the most common styles. Feel free to experiment with them in the example code.

# Layout Styles

Property | Type | Description
--- | --- | ---
\`flex\` | \`number\` | What proportion of the available space should this element expand to fill? 0 means the element doesn't expand.
\`flexDirection\` | \`string\` | Do you want a vertical (\`column\`) or horizontal (\`row\`) layout? This choice determines the orientation of the <b>primary axis</b> of your layout. One of: \`row, column\`.
\`justifyContent\` | \`string\` | How should the content be distributed along the <b>primary axis</b> of your layout? Should it be at the start, the center, the end, or spaced evenly? One of: \`flex-start, center, flex-end, space-around, space-between\`.
\`alignItems\` | \`string\` | How should the content be aligned along the <b>secondary axis</b> of your layout? (If the primary axis is \`row\`, then the secondary axis is \`column\`, and vice versa) Should content be aligned at the start, the center, the end, or stretched to fill? One of: \`flex-start, center, flex-end, stretch\`.
\`width\` | \`number\` | A fixed width
\`height\` | \`number\` | A fixed height
\`margin\` | \`number\` | How much space should separate this element from other adjacent elements? For more granular control, use the properties: \`marginTop, marginBottom, marginLeft, marginRight\`.
\`padding\` | \`number\` | How much padding should be within this element before its children are shown? For more granular control, use the properties: \`paddingTop, paddingBottom, paddingLeft, paddingRight\`.

# Visual Styles

Property | Type | Description
--- | --- | ---
\`backgroundColor\` | \`string\` | The background color
\`borderWidth\` | \`number\` | The border width. For more granular control, use the properties: \`borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth\`.
\`borderColor\` | \`string\` | The color of the border. For more granular control, use the properties: \`borderTopColor, borderBottomColor, borderLeftColor, borderRightColor\`.
\`borderRadius\` | \`number\` | Rounded edges
\`opacity\` | \`number\` | How transparent should this element be? 0 means fully transparent, 1 means fully opaque.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
