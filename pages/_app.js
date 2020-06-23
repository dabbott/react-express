import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Router from 'next/router'
import { Page, PageComponents, findNode } from 'react-guidebook'
import { pageView } from '../utils/Analytics'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'
import EditorConsole from '../components/EditorConsole'
import logo from '../images/logo.svg'
import guidebook from '../guidebook'

const theme = {
  colors: colors,
  textStyles: textStyles,
}

const Components = {
  ...PageComponents,
  Example: EditorConsole,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const node = findNode(guidebook, router.pathname.slice(1)) || guidebook

    return (
      <ThemeProvider theme={theme}>
        {router.pathname.endsWith('slides') ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Helmet title={node.title}>
              <html lang="en" />
              <meta property="og:title" content={node.title} />
            </Helmet>
            <MDXProvider components={Components}>
              <Page rootNode={guidebook} logo={logo}>
                <Component {...pageProps} />
              </Page>
            </MDXProvider>
          </>
        )}
      </ThemeProvider>
    )
  }
}

if (typeof document !== 'undefined') {
  pageView()
  Router.onRouteChangeComplete = pageView
}
