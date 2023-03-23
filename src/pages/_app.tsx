import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import 'simplebar-react/dist/simplebar.min.css'

import { mulish as mulishFont } from 'font/config'

import { I18nProvider } from 'i18n/provider'

import { CoreRTL } from 'components/core/CoreRtl'

import { createEmotionCache } from 'libs/emotion'

import { SettingsConsumer, SettingsProvider } from 'contexts/settings-context'

import { createTheme } from 'themes'

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const CustomApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>CEPP</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <SettingsProvider>
            <SettingsConsumer>
              {(settings) => {
                // * Prevent theme flicker when restoring custom settings from browser storage
                if (!settings.isInitialized) {
                  // return null;
                }

                const theme = createTheme({
                  primaryColorPreset: settings.primaryColorPreset,
                  secondaryColorPreset: settings.secondaryColorPreset,
                  contrast: settings.contrast,
                  direction: settings.direction,
                  paletteMode: settings.paletteMode,
                  responsiveFontSizes: settings.responsiveFontSizes,
                })

                // * Prevent guards from redirecting
                // const showSlashScreen = !auth.isInitialized

                return (
                  <I18nProvider>
                    <MaterialThemeProvider theme={theme}>
                      <EmotionThemeProvider theme={theme}>
                        <CoreRTL direction={settings.direction}>
                          <Head>
                            <meta name="color-scheme" content={settings.paletteMode} />
                            <meta name="theme-color" content={theme.palette.neutral[900]} />
                          </Head>
                          <main style={mulishFont.style}>
                            <CssBaseline />
                            {getLayout(<Component {...pageProps} />)}
                          </main>
                        </CoreRTL>
                      </EmotionThemeProvider>
                    </MaterialThemeProvider>
                  </I18nProvider>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}

export default CustomApp
