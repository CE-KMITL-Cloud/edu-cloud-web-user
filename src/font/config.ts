import { Mulish } from '@next/font/google'

export const mulishFontCSSKey = '--mulish-font'

export const mulish = Mulish({
  subsets: ['latin'],

  // ! Font loader values must be explicitly written literals
  variable: '--mulish-font',
})
