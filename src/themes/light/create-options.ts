import type { ThemeOptions } from '@mui/material'

import type { ColorPreset, Contrast } from 'themes'
import { createComponents } from 'themes/light/create-components'
import { createPalette } from 'themes/light/create-palette'
import { createShadows } from 'themes/light/create-shadows'

interface Config {
  primaryColorPreset?: ColorPreset
  secondaryColorPreset?: ColorPreset
  contrast?: Contrast
}

export const createOptions = (config: Config): ThemeOptions => {
  const palette = createPalette(config)
  const components = createComponents({ palette })
  const shadows = createShadows()

  return {
    components,
    palette,
    shadows,
  }
}
