import { Container, Paper, styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.grey,
  height: '100%',
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0, 4, 0),
}))
