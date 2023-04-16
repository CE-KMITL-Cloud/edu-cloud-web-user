import { Stack, styled } from '@mui/material'

export const Row = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const CheckBoxWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(2),
}))

export const TextFieldWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1, 2),
}))
