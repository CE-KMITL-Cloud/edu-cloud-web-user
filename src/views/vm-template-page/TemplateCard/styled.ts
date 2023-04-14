import { Divider, Paper, styled } from '@mui/material'

export const Root = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.secondary.alpha30}`,
  borderRadius: 10,
}))

export const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  borderColor: theme.palette.secondary.alpha30,
}))

export const TextWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}))
