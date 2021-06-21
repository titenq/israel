import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./img/icon-512.png" />
        <link rel="apple-touch-icon" href="./img/icon-512.png" />
        <link rel="manifest" href="./manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Curso de NextJS" />
        <title>Curso React</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
