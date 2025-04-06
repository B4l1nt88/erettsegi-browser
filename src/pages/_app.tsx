import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { HeroUIProvider } from "@heroui/react"
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Head>
        <title>Érettségi kereső</title>
      </Head>
      <HeroUIProvider className={`${inter.variable} font-sans`}>
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={true}
        >
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  )
}
