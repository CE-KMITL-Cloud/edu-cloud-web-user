import { Stack, styled } from '@mui/material'

const itemWidth = 160
const itemHeight = 200

export const ItemsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  overflow: 'hidden',
  height: 'auto',
  gap: theme.spacing(2),
}))

export const InnerBox = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 0),
}))

export const ItemRoot = styled('div', {
  shouldForwardProp: (props: string) => !['glow'].includes(props),
})<{ glow: boolean }>(({ glow, theme }) => {
  const borderWidth = glow ? 2 : 1
  const color = glow ? theme.palette.primary.alpha50 : theme.palette.secondary.alpha30
  return {
    width: itemWidth,
    height: itemHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: borderWidth,
    borderColor: color,
    borderStyle: 'solid',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: 10,
    backgroundColor: color,
    '& > inner-box': {
      backgroundColor: color,
    },
  }
})

export const DescriptionWrapper = styled('div', {
  shouldForwardProp: (props: string) => !['glow'].includes(props),
})<{ glow: boolean }>(({ glow, theme }) => ({
  width: '100%',
  flex: '1 1 0%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.background.default,
  color: glow ? theme.palette.primary.alpha50 : theme.palette.secondary.alpha30,
  fontWeight: glow ? 500 : 400,
}))
