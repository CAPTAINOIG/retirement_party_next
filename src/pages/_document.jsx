import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8"/>
          <meta
            name="description"
            content="Statisense is a leading AI data company specializing in financial report analysis, bank statement evaluation, and AI chatbot services. Empowering businesses with accurate insights for informed decisions."
          />
          <meta
            name="keywords"
            content="Statisense, AI data company, financial report analysis, bank statement analysis, AI chatbot, business decisions"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="robots" content="index, follow"/>
          <meta
            property="og:title"
            content="Statisense - Pioneering AI Data Company for Informed Business Decisions"
          />
          <meta
            property="og:description"
            content="Statisense is a leading AI data company specializing in financial report analysis, bank statement evaluation, and AI chatbot services. Empowering businesses with accurate insights for informed decisions."
          />
          <meta property="og:url" content="https://www.statisense.com/"/>
          <meta property="og:image" content="https://www.statisense.com/images/logo.png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta
            name="twitter:title"
            content="Statisense - Pioneering AI Data Company for Informed Business Decisions"
          />
          <meta
            name="twitter:description"
            content="Statisense is a leading AI data company specializing in financial report analysis, bank statement evaluation, and AI chatbot services. Empowering businesses with accurate insights for informed decisions."
          />
          <meta name="twitter:image" content="https://www.statisense.com/images/logo.png"/>

          <link rel="icon" type="image/svg+xml" href="/favicon.ico"/>
          <link rel="canonical" href="https://www.statisense.co/"/>
          <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
