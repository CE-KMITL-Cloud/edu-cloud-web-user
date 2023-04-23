import { Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderTopColor: theme.palette.primary.main,
  borderTopStyle: 'solid',
  borderTopWidth: 1,
  width: '100%',
  height: '100%',
}))

export const ConsoleWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.lighten,
  backgroundColor: theme.palette.common.black,
  height: '100%',
  flex: 3,
}))
