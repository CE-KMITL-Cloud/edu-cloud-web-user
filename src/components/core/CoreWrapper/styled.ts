import { Box, Stack, styled } from '@mui/material'

export const Screen = styled(Stack)(() => ({
  flexGrow: 1,
  minHeight: '100vh',
}))

export const ContentWrapper = styled(Box)(() => ({
  flex: '1 0 0px',
}))
