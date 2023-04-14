import { Stack, styled } from '@mui/material'

export const ActionButtonStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
