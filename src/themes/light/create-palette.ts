import type { PaletteOptions } from '@mui/material'
import { common } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'

import type { ColorPreset, Contrast } from 'themes'
import { error, info, neutral, success, warning } from 'themes/colors'
import { getColorFromPreset } from 'themes/utils'

interface Config {
  primaryColorPreset?: ColorPreset
  secondaryColorPreset?: ColorPreset
  contrast?: Contrast
}

export const createPalette = (config: Config): PaletteOptions => {
  const { primaryColorPreset, secondaryColorPreset, contrast } = config

  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: contrast === 'high' ? neutral[50] : common.white,
      paper: common.white,
    },
    divider: '#F2F4F7',
    error,
    info,
    mode: 'light',
    neutral,
    primary: getColorFromPreset(primaryColorPreset),
    secondary: getColorFromPreset(secondaryColorPreset),
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      lighten: '#FFFFFF',
      light: '#FFFFFF',
      main: '#000000',
      dark: '#000000',
      darken: '#000000',
    },
    warning,
  }
}
