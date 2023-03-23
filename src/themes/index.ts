import type { Direction, PaletteMode, Theme } from '@mui/material'
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles'

import { createOptions as createBaseOptions } from 'themes/base/create-options'
import { createOptions as createDarkOptions } from 'themes/dark/create-options'
import { createOptions as createLightOptions } from 'themes/light/create-options'

declare module '@mui/material/styles/createPalette' {
  // * Override `palette.text`
  export interface TypeText {
    primary: string
    secondary: string
    disabled: string
    lighten: string
    light: string
    main: string
    dark: string
    darken: string
  }
}

declare module '@mui/material/styles' {
  export interface NeutralColors {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface Palette {
    neutral: NeutralColors
  }

  interface PaletteOptions {
    neutral?: NeutralColors
  }

  interface PaletteColor {
    lightest?: string
    darkest?: string
    alpha4?: string
    alpha8?: string
    alpha12?: string
    alpha30?: string
    alpha50?: string
  }

  interface TypeBackground {
    paper: string
    default: string
  }
}

export type ColorPreset = 'blue' | 'green' | 'indigo' | 'purple' | 'gray'

export type Contrast = 'normal' | 'high'

interface ThemeConfig {
  primaryColorPreset?: ColorPreset
  secondaryColorPreset?: ColorPreset
  contrast?: Contrast
  direction?: Direction
  paletteMode?: PaletteMode
  responsiveFontSizes?: boolean
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    createBaseOptions({
      direction: config.direction,
    }),
    config.paletteMode === 'dark'
      ? createDarkOptions({
          primaryColorPreset: config.primaryColorPreset,
          secondaryColorPreset: config.secondaryColorPreset,
          contrast: config.contrast,
        })
      : createLightOptions({
          primaryColorPreset: config.primaryColorPreset,
          secondaryColorPreset: config.secondaryColorPreset,
          contrast: config.contrast,
        }),
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
