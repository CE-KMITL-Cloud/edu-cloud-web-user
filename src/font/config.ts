import { Kanit, Mulish } from '@next/font/google'

export const mulishFontCSSKey = '--mulish-font'

export const mulish = Mulish({
  subsets: ['latin'],

  // ! Font loader values must be explicitly written literals
  variable: '--mulish-font',
})

export const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
