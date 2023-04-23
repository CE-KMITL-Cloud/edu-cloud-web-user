import { Paper, Stack, alpha, styled } from '@mui/material'

import { StretchContainer } from 'components/common/StretchContainer'

export const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  height: '100%',
  width: '100%',
  padding: theme.spacing(3),
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  height: '100%',
  borderRadius: 10,
  overflow: 'clip',
  backgroundColor: theme.palette.neutral[900],
  color: theme.palette.text.light,
  '@supports not (overflow: clip)': {
    overflow: 'hidden',
  },
}))

export const FullHeightStretchContainer = styled(StretchContainer)(({ theme }) => ({
  height: '100%',
  paddingBottom: theme.spacing(8),
}))

export const BoxHeaderRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: theme.spacing(0.5, 2),
  borderRadius: 10,
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  boxShadow: theme.shadows[15],
}))

export const Center = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}))
