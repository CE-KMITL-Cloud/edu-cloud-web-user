import { styled } from '@mui/material'

export const boxWidth = 160
export const boxHeight = 160

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
    cursor: 'pointer',
    borderRadius: 10,
    backgroundColor: 'transparent',
  }
})

export const Column = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Center = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flex: '1 1 0%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const StyledSelectWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: 36,
  backgroundColor: theme.palette.secondary.alpha12,
  color: theme.palette.text.primary,
}))
