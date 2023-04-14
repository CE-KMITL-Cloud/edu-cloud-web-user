import { styled } from '@mui/material'

export const Root = styled('div', {
  shouldForwardProp: (props: string) => !['width'].includes(props),
})<{
  width?: number
}>(({ width, theme }) => ({
  width: width ?? 200,
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 12,
  border: `1px solid ${theme.palette.secondary.alpha30}`,
  overflow: 'clip',
  '@supports not (overflow: clip)': {
    overflow: 'hidden',
  },
}))

export const Item = styled('div', {
  shouldForwardProp: (props: string) => !['glow'].includes(props),
})<{
  glow: boolean
}>(({ glow, theme }) => {
  const color = glow ? theme.palette.primary.contrastText : theme.palette.text.primary
  return {
    padding: theme.spacing(1, 0),
    width: '50%',
    height: 'auto',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    backgroundColor: glow ? theme.palette.primary.alpha80 : 'transparent',
    color: color,
    '& .toggle-switch-icon': {
      color: color,
    },
  }
})

export const VerticalDivider = styled('span')(({ theme }) => ({
  display: 'block',
  width: 0,
  borderLeft: `1px solid ${theme.palette.secondary.alpha30}`,
  alignSelf: 'stretch',
}))

export const IconWrapper = styled('div')(({ theme }) => ({
  paddingRight: theme.spacing(1),
}))
