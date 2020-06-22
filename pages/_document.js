import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import guidebook from '../guidebook'

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
          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />

          {/* Site description */}
          <meta name="description" content={guidebook.subtitle} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.react.express/" />
          <meta property="og:site_name" content={guidebook.title} />
          <meta property="og:description" content={guidebook.subtitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:card" content="summary" />
          <meta property="og:creator" content="@dvnabbott" />
          <meta
            property="article:author"
            content="https://twitter.com/dvnabbott"
          />

          {/* Image */}
          <meta
            property="og:image"
            content="http://www.react.express/static/preview.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://www.react.express/static/preview.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="" />

          {/* Facebook */}
          <meta property="fb:app_id" content="105028866738480" />

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
