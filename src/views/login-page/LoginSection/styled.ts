import { Box, Button, Stack, styled } from '@mui/material'

export const Root = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: 600,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const ContentsWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  maxWidth: 472,
}))

export const ButtonGroup = styled(Stack)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}))

export const AgreementBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  width: '100%',
}))

export const LogoWrapper = styled('div')(() => ({
  display: 'contents',
}))

export const TextFieldWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0, 1, 0),
}))

export const BaseButton = styled(Button)(() => ({
  height: 48,
}))
