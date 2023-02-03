import { Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flex: '1 1 0%',
  gap: theme.spacing(4),
  paddingRight: theme.spacing(10),
}))

export const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}))
