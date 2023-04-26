import { Avatar, Stack, styled } from '@mui/material'
import SimpleBar from 'simplebar-react'

export const StyledScrollbar = styled(SimpleBar)(() => ({
  height: '100%',
  '& .simplebar-content': {
    height: '100%',
  },
  '& .simplebar-scrollbar:before': {
    background: 'var(--nav-scrollbar-color)',
  },
}))

export const LogoWrapper = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: theme.spacing(3),
}))

export const SideNavSectionWrapper = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  flexGrow: 1,
  padding: theme.spacing(0, 2),
}))

export const UesrInfoRoot = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.alpha12,
}))

export const SignOutButtonWrapper = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  marginLeft: 'auto',
  color: theme.palette.neutral[400],
}))

export const Contents = styled(Stack)(() => ({ height: '100%' }))

export const StyledAvatar = styled(Avatar)(() => ({
  height: 40,
  width: 40,
}))
