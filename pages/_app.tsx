import App, { AppInitialProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import ReactGA from 'react-ga'
import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'styled-components'
import type { AppProps, AppContext } from 'next/app'
import Router from 'next/router'
import {
  Page,
  Author,
  PageComponents,
  NotFound,
  findNodeBySlug,
  trackPageView,
  initializeAnalytics,
  LinkProvider,
  Anchor,
  RouterProvider,
  Banner,
  LinkProps,
  HeadTags,
  GuidebookConfig,
  Styles,
  isExternalUrl,
} from 'react-guidebook'
import defaultTheme from '../styles/theme'
// import slidesTheme from '../styles/slidesTheme'
import EditorConsole from '../components/EditorConsole'
import logo from '../images/logo.svg'
import { searchPages, searchTextMatch } from '../utils/search'
import pkg from '../package.json'
import type { TreeNode } from 'generate-guidebook'

const config: GuidebookConfig = pkg.guidebook ?? {}

const { locales, defaultLocale } = config.i18n!

export default function GuidebookApp({
  Component,
  pageProps,
  router,
  locale,
  guidebook,
}: AppProps & {
  locale: string
  guidebook: TreeNode
}) {
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`

  const LinkComponent = useMemo(() => {
    return ({ href, children, style }: LinkProps) => {
      // console.log(localePrefix, href)

      return (
        <Link
          href={isExternalUrl(href) ? href : `${localePrefix}${href}`}
          passHref
        >
          <Anchor style={style}>{children}</Anchor>
        </Link>
      )
    }
  }, [localePrefix])

  const Components = useMemo(
    () => ({
      ...PageComponents,
      Example: EditorConsole,
      Author,
      Details: ({ children }: { children: React.ReactNode }) => children,
      a: LinkComponent,
    }),
    [LinkComponent]
  )

  // Use `asPath`, since `pathname` will be "_error" if the page isn't found
  const pathname = router.pathname.slice(localePrefix.length)
  const clientPath = router.asPath.slice(localePrefix.length)
  // const theme = pathname.endsWith('slides') ? slidesTheme : defaultTheme

  let content
  let title: string
  let description: string | undefined

  const node = findNodeBySlug(guidebook, pathname.slice(1))

  if (node) {
    const isIntroduction = node.slug === ''

    title = node.title
    description = node.subtitle
    content = (
      <MDXProvider components={Components}>
        <Page
          rootNode={guidebook}
          header={
            isIntroduction ? (
              <Banner logo={logo} github={config.github} />
            ) : undefined
          }
          searchPages={locale === 'en' ? searchPages : undefined}
          searchTextMatch={locale === 'en' ? searchTextMatch : undefined}
        >
          <Component {...pageProps} />
        </Page>
      </MDXProvider>
    )
  } else {
    title = (Component as any).title || ''
    content = <Component {...pageProps} />
  }

  const routerWithLocale = useMemo(
    () => ({
      pathname,
      clientPath,
      push: (pathname: string) => {
        router.push(`${localePrefix}${pathname}`)
      },
    }),
    [locale, pathname, clientPath]
  )

  return (
    <>
      <Head>
        {HeadTags({
          config: pkg.guidebook ?? {},
          pageTitle: title,
          pageDescription: description,
        })}
      </Head>
      <RouterProvider value={routerWithLocale}>
        <LinkProvider value={LinkComponent}>
          <Styles.Reset />
          <Styles.Main />
          <ThemeProvider theme={defaultTheme}>
            {/* A single child is required here for React.Children.only */}
            {content}
          </ThemeProvider>
        </LinkProvider>
      </RouterProvider>
    </>
  )
}

GuidebookApp.getInitialProps = async (appContext: AppContext) => {
  const router = appContext.router
  const appProps = await App.getInitialProps(appContext)

  const locale =
    locales.find((item) => router.asPath.startsWith(`/${item}`)) ??
    defaultLocale

  return {
    ...appProps,
    locale,
    guidebook: (await import(`../guidebook-${locale}.js`)).default,
  }
}

if (typeof document !== 'undefined' && config.googleAnalytics) {
  const pageView = () => trackPageView(ReactGA)

  initializeAnalytics(ReactGA, config.googleAnalytics.trackingId)
  pageView()
  ;(Router as any).onRouteChangeComplete = pageView
}
