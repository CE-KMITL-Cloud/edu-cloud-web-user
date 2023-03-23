import { Container, Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.secondary.light,
}))

export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: 420,
}))

export const ImageContainer = styled('div')(() => ({
  position: 'relative',
  height: '100%',
  width: '50%',
}))
