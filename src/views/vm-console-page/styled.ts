import { Paper, styled } from '@mui/material'

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
