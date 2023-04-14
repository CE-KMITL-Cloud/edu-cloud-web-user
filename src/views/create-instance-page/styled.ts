import { Paper, Stack, styled } from '@mui/material'

import { Screen } from 'layouts/Screen'

export const Background = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.secondary.light,
  flex: '1 1 0%',
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}))

export const ScreenFlex = styled(Screen)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  border: `1px solid ${theme.palette.secondary.alpha30}`,
  borderRadius: 10,
}))
