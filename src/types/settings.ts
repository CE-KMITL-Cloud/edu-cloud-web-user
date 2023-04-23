import type { Direction, PaletteMode } from '@mui/material'

import type { ColorPreset, Contrast } from 'themes'

export type NavColor = 'blend-in' | 'discreet' | 'evident'

export interface Settings {
  primaryColorPreset?: ColorPreset
  secondaryColorPreset?: ColorPreset
  contrast?: Contrast
  direction?: Direction
  navColor?: NavColor
  paletteMode?: PaletteMode
  responsiveFontSizes?: boolean
  stretch?: boolean
}
