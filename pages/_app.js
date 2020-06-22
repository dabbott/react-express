import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import Helmet from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Router from 'next/router'
import { Page, PageComponents } from 'react-guidebook'
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
  h3: (props) => (
    <h3
      style={{
        ...textStyles.subheader,
        fontSize: '14px',
        fontWeight: 'bold',
        textDecoration: 'underline',
        marginTop: '25px',
        marginBottom: '15px',
      }}
      {...props}
    ></h3>
  ),
  Example: EditorConsole,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeProvider theme={theme}>
        {router.pathname.endsWith('slides') ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Helmet title={guidebook.title}>
              <html lang="en" />
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
