import { AppBar, Button, Stack, Toolbar, alpha, styled } from '@mui/material'

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: theme.palette.background.default,
}))

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  background: theme.palette.background.default,
  position: 'relative',
}))

export const StyledRows = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}))

export const StyledButtonsGroupWrapper = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  color: theme.palette.text.primary,
}))

// export const LogoWrapper = styled('div')(() => ({
//   display: 'contents',
// }))

export const SignInButtonWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(1),
}))

export const SignOutButtonWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(1),
}))

export const SignInButton = styled(Button)(() => ({
  minWidth: 112,
}))
