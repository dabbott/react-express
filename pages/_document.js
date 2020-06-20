import Document, { Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="description"
            content="Learn React Native with interactive examples."
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.javascript.express/" />
          <meta property="og:site_name" content="React Native Express" />
          <meta property="og:title" content="React Native Express" />
          <meta
            property="og:description"
            content="Learn React Native with interactive examples."
          />
          <meta
            property="og:image"
            content="http://www.javascript.express/static/logo@2x.png"
          />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:card" content="summary" />
          <meta property="og:site" content="@dvnabbott" />
          <meta property="og:creator" content="@dvnabbott" />
          <meta property="fb:app_id" content="907755649360812" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
