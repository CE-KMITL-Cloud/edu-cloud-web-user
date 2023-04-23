import { styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.lighten,
  backgroundColor: theme.palette.neutral[800],
  flex: 1,
  minWidth: 180,
  maxWidth: 300,
  height: '100%',
}))

export const Row = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
}))

export const IconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 0),
}))
