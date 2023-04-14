import type { TypographyOptions } from '@mui/material/styles/createTypography'

import { mulish } from 'font/config'

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily: mulish.style.fontFamily,
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: mulish.style.fontFamily,
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
  }
}
