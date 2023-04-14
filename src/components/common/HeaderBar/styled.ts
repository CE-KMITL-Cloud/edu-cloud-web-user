import { Stack, styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4, 0, 4, 4),
  boxShadow: theme.shadows[1],
}))

export const Center = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}))
