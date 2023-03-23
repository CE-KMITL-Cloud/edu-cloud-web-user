import type { PaletteOptions } from '@mui/material'
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
      disabled: alpha(neutral[100], 0.38),
      disabledBackground: alpha(neutral[100], 0.12),
      focus: alpha(neutral[100], 0.16),
      hover: alpha(neutral[100], 0.04),
      selected: alpha(neutral[100], 0.12),
    },
    background: {
      default: contrast === 'high' ? '#0B0F19' : '#0E1320',
      paper: neutral[900],
    },
    divider: '#2D3748',
    error,
    info,
    mode: 'dark',
    neutral,
    primary: getColorFromPreset(primaryColorPreset),
    secondary: getColorFromPreset(secondaryColorPreset),
    success,
    text: {
      primary: '#EDF2F7',
      secondary: '#A0AEC0',
      disabled: 'rgba(255, 255, 255, 0.48)',
      lighten: '#FFFFFF',
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      darken: '#FFFFFF',
    },
    warning,
  }
}
