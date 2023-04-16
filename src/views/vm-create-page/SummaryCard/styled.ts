import { Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  justifyContent: 'flex-start',
  maxWidth: 256,
  minWidth: 256,
  padding: theme.spacing(2),
  alignItems: 'center',
  backgroundColor: theme.palette.primary.darkest,
  borderRadius: 12,
  '& > hr': {
    margin: theme.spacing(2, 0),
  },
}))
