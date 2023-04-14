import { Stack, styled } from '@mui/material'

export const Contents = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(3, 3, 18, 3),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
}))

export const Section = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '1 1 0%',
  gap: theme.spacing(3),
}))

export const Aside = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(3),
}))
