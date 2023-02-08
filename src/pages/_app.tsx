import { CacheProvider, EmotionCache, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { type AppProps } from 'next/app'
import Head from 'next/head'

import { mulish as mulishFont } from 'font/config'

import { I18nProvider } from 'i18n/provider'

import { PageWrapper } from 'components/core/CoreWrapper'

import { createEmotionCache } from 'libs/emotion'

import { theme } from 'themes/main'

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const CustomApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) => {
  return (
    <>
      <Head>
        <title>CEPP</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
              <main style={mulishFont.style}>
                <CssBaseline />
                <I18nProvider>
                  <PageWrapper>
                    <Component {...pageProps} />
                  </PageWrapper>
                </I18nProvider>
              </main>
            </EmotionThemeProvider>
          </MaterialThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}

export default CustomApp
