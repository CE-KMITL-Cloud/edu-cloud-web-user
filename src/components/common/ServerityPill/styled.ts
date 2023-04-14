import { styled } from '@mui/material'

export type SeverityPillColor = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success'

export const SeverityPillRoot = styled('span', {
  shouldForwardProp: (props: string) => !['color', 'minWidth'].includes(props),
})<{
  color?: SeverityPillColor
  minWidth?: number
}>(({ theme, color: _color = 'primary', minWidth: _minWidth = 20 }) => {
  const backgroundColor = theme.palette[_color].alpha12
  const color = theme.palette.mode === 'dark' ? theme.palette[_color].main : theme.palette[_color].dark
  return {
    alignItems: 'center',
    backgroundColor,
    color,
    borderRadius: 12,
    cursor: 'default',
    display: 'inline-flex',
    flexGrow: 0,
    flexShrink: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: 'center',
    letterSpacing: 0.5,
    minWidth: _minWidth,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  }
})
