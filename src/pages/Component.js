import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
\`Components\` are the building block of any UI. React Native manages the mapping from JavaScript components to the native UI which is actually rendered.

The entire UI of the application is specified by declaring which components to render, and in what order. Components are nested inside other components, forming a tree data structure. The top level component, or the root of the tree, is known as the root component. Nested components are called children components.

In the next sections, we'll cover the two most important aspects of using components, the <b>Component API</b> and the <b>Component Lifecycle API</b>.
`

export default props => <DefaultPage {...props}>{content}</DefaultPage>
