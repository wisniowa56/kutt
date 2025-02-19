import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import getConfig from "next/config";
import React from "react";

import { Colors } from "../consts";

const { publicRuntimeConfig } = getConfig();

interface Props {
  styleTags: any;
}

class AppDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content={`${publicRuntimeConfig.SITE_NAME} jest darmowym skracaczem linków SU na Wiśniowej.`}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,700"
            rel="stylesheet"
          />
          <link
            rel="icon"
            sizes="196x196"
            href="/images/icons/logo_196px.png"
          />
          <link
            rel="icon"
            sizes="128x128"
            href="/images/icons/logo_128px.png"
          />
          <link rel="apple-touch-icon" href="/images/icons/logo_196px.png" />
          <link rel="mask-icon" href="/images/icon.svg" color="blue" />
          <link rel="manifest" href="manifest.webmanifest" />
          <meta name="theme-color" content="#f3f3f3" />

          <meta property="fb:app_id" content="123456789" />
          <meta
            property="og:url"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={publicRuntimeConfig.SITE_NAME} />
          <meta
            property="og:image"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}/images/card.png`}
          />
          <meta
            property="og:description"
            content="Skracacz linków Wiśniowa SU"
          />
          <meta
            name="twitter:url"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}`}
          />
          <meta name="twitter:title" content={publicRuntimeConfig.SITE_NAME} />
          <meta
            name="twitter:description"
            content="Skracacz linków Wiśniowa SU"
          />
          <meta
            name="twitter:image"
            content={`https://${publicRuntimeConfig.DEFAULT_DOMAIN}/images/card.png`}
          />

          {this.props.styleTags}

          <script
            dangerouslySetInnerHTML={{
              __html: `window.recaptchaCallback = function() { window.isCaptchaReady = true; }`
            }}
          />

          <script
            src="https://www.google.com/recaptcha/api.js?render=explicit"
            async
            defer
          />
        </Head>
        <body
          style={{
            margin: 0,
            backgroundColor: Colors.Bg,
            font: '16px/1.45 "Nunito", sans-serif',
            overflowX: "hidden",
            color: Colors.Text,
            minHeight: "100vh"
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default AppDocument;
