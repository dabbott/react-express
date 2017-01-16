import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/markdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
ECMAScript is the language specification used to implement the JavaScript language. ES6, or ECMAScript 6, is the first significant update to the language since ES5 was initially released in 2009.

Many ES6 features are already available in modern JavaScript engines. Using Babel, however, gives us access to many more features, while ensuring our JavaScript runs on more platforms. React Native uses Babel to enable ES6 features and ensure cross-platform consistency, as your JavaScript will run on Android, iOS, Windows, and other platforms.

# ES6 Highlights

Let's take a look at some of the new language features we'll be using, and how they get compiled through Babel. There are a lot of language features to go through, so if you get tired, you can move on to [React Components](components), and finish up the language sections another time.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
