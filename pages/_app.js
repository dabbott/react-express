import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import ReactGA from 'react-ga'
import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Router from 'next/router'
import {
  Page,
  Author,
  PageComponents,
  NotFound,
  findNode,
  trackPageView,
  initializeAnalytics,
  slidesTheme,
} from 'react-guidebook'
import theme from '../styles/theme'
import EditorConsole from '../components/EditorConsole'
import logo from '../images/logo.svg'
import guidebook from '../guidebook'

const Components = {
  ...PageComponents,
  Example: EditorConsole,
  Author,
  Details: ({ children }) => children,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const slug = router.pathname.slice(1)

    if (slug.endsWith('slides')) {
      return (
        <ThemeProvider theme={slidesTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      )
    }

    if (slug.endsWith('playgrounds')) {
      return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      )
    }

    const node = findNode(guidebook, slug)

    if (!node) {
      return (
        <ThemeProvider theme={theme}>
          <NotFound routeMap={{}} />
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider theme={theme}>
        {/* Fragment needed for React.Children.only */}
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
      </ThemeProvider>
    )
  }
}

if (typeof document !== 'undefined') {
  const pageView = () => trackPageView(ReactGA)

  initializeAnalytics(ReactGA, 'UA-77053427-2')
  pageView()
  Router.onRouteChangeComplete = pageView
}
