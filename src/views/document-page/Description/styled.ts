import { Divider, Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flex: '1 1 0%',
  gap: theme.spacing(3),
}))

export const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  borderColor: theme.palette.secondary.alpha80,
}))
