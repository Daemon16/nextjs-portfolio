import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Web developer" />
        <meta
          name="keywords"
          content="Frontend Developer, Fullstack Developer, Web Developer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Actor&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dar:text-white bg-gradient-to-r from-green to-blue-400 dark:from-dark-700 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
