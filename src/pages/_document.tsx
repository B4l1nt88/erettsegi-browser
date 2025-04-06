import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='hu'>
      <Head>
        <meta name='theme-color' content='#121212' />
        <meta name='msapplication-TileColor' content='#121212' />
        <meta name='title' content='Érettségi kereső' />
        <meta name='og:title' content='Érettségi kereső' />
        <meta property='og:url' content='https://erettsegi.sbalint.hu' />
        <meta
          name='description'
          content='Egyszerű keresés és letöltés az érettségi feladatsorokhoz. 🏫'
        />
        <meta
          name='og:description'
          content='Egyszerű keresés és letöltés az érettségi feladatsorokhoz. 🏫'
        />
        
        <link rel='icon' href='/favicon.ico' />
        <meta property='image' content='/logo.png' />
        <meta property='og:image' content='/logo.png' />
        <meta name='author' content='sbalint' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
