import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="referrer" content="origin" />

        <meta name="application-name" content="Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)" />
        <meta name="application-url" content="https://kennyotesile.com" />
        <meta name="author" content="Kenny Otesile" />
        <meta name="description" content="" /> {/* TODO: Add description */}
        <meta name="apple-itunes-app" id="apple-itunes-app" content="app-id=" /> {/* TODO: Add itunes app id */}

        <meta name="theme-color" content="" /> {/* TODO: Add theme color code */}
        <meta itemProp="image" content="" /> {/*TODO: add 1600x836 image*/}

        {/* Mobile Web */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="canonical" href="https://kennyotesile.com"/>

        {/* Schema.org */}
        <meta itemProp="name" content="Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)" />
        <meta itemProp="description" content="" /> {/* TODO: Add description */}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kennyotesile" />
        <meta name="twitter:title" content="Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)" />
        <meta name="twitter:description" content="" /> {/* TODO: Add description */}
        <meta name="twitter:image" content="" /> {/* TODO: add 1600x836 image content */}

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content="Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)" />
        <meta name="og:description" content="" /> {/* TODO: Add description */}
        <meta name="og:url" content="https://kennyotesile.com" />
        <meta name="og:site_name" content="Kenny Otesile – Entrepreneur Computer Scientist (Software Engineering, AI/ML)" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="" /> {/* TODO: add 1600x836 image content */}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
        
        {/* https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org JSON */}
        <script type="application/ld+json">
          {/*TODO: add schema*/}
        </script>

        {/* <base href="https://kennyotesile.com/" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}