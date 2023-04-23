import { Stack, styled } from '@mui/material'

export const HeaderPaper = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Root = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(1),
}))
