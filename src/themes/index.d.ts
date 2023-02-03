export declare module '@mui/material/styles/createPalette' {
  // * Override `palette.text`
  interface TypeText {
    primary: string
    secondary: string
    disabled: string
    lighten: string
    light: string
    main: string
    dark: string
    darken: string
  }

  // * Add link color
  interface Palette {
    link: string
  }

  interface PaletteOptions {
    link: string
  }

  // * Override `palette.background`
  interface TypeBackground {
    grey: string
    dark: string
  }
}

export declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties
  }

  // * ================================================================================
  // *  allow configuration using `createTheme`
  // * ================================================================================
  interface TypographyVariantsOptions {
    label?: React.CSSProperties
  }
}

// * ================================================================================
// *  Update the Typography's variant prop options
// * ================================================================================
export declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true
  }
}

// * ================================================================================
// *  Update the Button's variant prop options
// * ================================================================================
export declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    circle: true
  }
}
