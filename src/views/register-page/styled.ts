import { Stack, styled } from '@mui/material'

export const Root = styled(Stack)(() => ({
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Contents = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  marginTop: theme.spacing(-10),
  height: '100%',
  alignItems: 'center',
  gap: theme.spacing(3),
  width: 400,
  maxWidth: 480,
}))

export const TextFieldWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0, 1, 0),
}))
