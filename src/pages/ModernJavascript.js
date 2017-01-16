import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
In the old days, you could just include a \`${'<script>'}\` tag in the header of your webpage, and your JavaScript would run as intended. These days, we *preprocess* our JavaScript in order to access experimental features and language extensions like JSX.

# Babel

Babel is the main tool used to preprocess JavaScript. Babel is a highly configurable parser that lets you use experimental features and extensions, compiling down into old-style JavaScript that can be supported on a wider range of platforms. Of course, if a native platform doesn't support an ES6 feature like \`Map()\`, Babel won't fully be able to help -- but it can in many cases polyfill missing APIs to provide this functionality.

Babel enables debugging of the the original source code by including **source maps** with the compiled JavaScript. JavaScript interpreters will run the compiled code, but map it to the source code in the debugger so that you can debug the source code instead of the (generally quite ugly) compiled output.

# Babel Configuration

You can configure Babel by including a \`.babelrc\` file in the root directory of your project. This file can specify which experimental JS features to enable and which plugins to use (JSX).

React Native takes care of properly configuring babel for you, so you generally won't need to create a \`.babelrc\`. However, if you want to modify the default presets, you can use the npm package [babel-preset-react-native](https://github.com/facebook/react-native/tree/master/babel-preset) as a base configuration, and apply additional plugins/configuration on top.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
