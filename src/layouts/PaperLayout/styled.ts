import { Container, Paper, styled } from '@mui/material'

export const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  height: '100%',
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}))

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0, 4, 0),
}))

export const TypoWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 4, 0),
}))
