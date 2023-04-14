import { alpha } from '@mui/material'
import type { PaletteColor } from '@mui/material/styles/createPalette'

import type { ColorPreset } from 'themes'
import { blue, gray, green, indigo, purple } from 'themes/colors'

export const getColorFromPreset = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case 'blue':
      return blue
    case 'green':
      return green
    case 'indigo':
      return indigo
    case 'purple':
      return purple
    case 'gray':
      return gray
    default:
      console.error('Invalid color preset, accepted values: "blue", "green", "indigo", "purple" or "gray"".')
      return blue
  }
}

export const withAlphas = (color: PaletteColor): PaletteColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
    alpha80: alpha(color.main, 0.8),
  }
}
