import * as NextImage from 'next/image'
import { muiTheme } from 'storybook-addon-material-ui5'

import { initialSettings as settings } from '../src/contexts/settings-context'
import '../src/stories/globals.css'
import { createTheme } from '../src/themes'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

const theme = createTheme({
  primaryColorPreset: settings.primaryColorPreset,
  secondaryColorPreset: settings.secondaryColorPreset,
  contrast: settings.contrast,
  direction: settings.direction,
  paletteMode: settings.paletteMode,
  responsiveFontSizes: settings.responsiveFontSizes,
})

export const decorators = [
  muiTheme([theme]),
  (story) => {
    return <main className="globals-style">{story()}</main>
  },
]

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
