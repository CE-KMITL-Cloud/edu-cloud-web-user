import { styled } from '@mui/material'

export const TextFieldWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 2),
}))

export const TextWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
}))
