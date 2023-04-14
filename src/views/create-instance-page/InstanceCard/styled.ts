import { styled } from '@mui/material'

export const boxWidth = 240
export const boxHeight = 64

export const Root = styled('div', {
  shouldForwardProp: (props: string) => !['glow'].includes(props),
})<{ glow: boolean }>(({ glow, theme }) => {
  const borderWidth = glow ? 2 : 1
  const borderColor = glow ? theme.palette.primary.alpha80 : theme.palette.secondary.alpha30
  return {
    width: boxWidth,
    height: boxHeight,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderStyle: 'solid',
    overflow: 'hidden',
    display: 'flex',
    gap: theme.spacing(2),
    padding: theme.spacing(1, 2),
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 10,
    backgroundColor: 'transparent',
  }
})

export const Contents = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
}))
