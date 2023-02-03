import { Paper, TextField, styled } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '.MuiInputLabel-root': {
    ...theme.typography.body2,
    color: theme.palette.text.lighten,
  },
  '.MuiInputLabel-shrink': {
    color: theme.palette.text.secondary,
  },
  '.MuiInputLabel-root.Mui-focused': {
    color: theme.palette.text.secondary,
  },
  '.MuiFilledInput-root': {
    background: 'none',
  },
  '.MuiFilledInput-root.Mui-focused': {
    background: 'none',
  },
  '.MuiFilledInput-root:hover': {
    background: 'none',
  },
  '.MuiFilledInput-root.Mui-disabled': {
    background: 'none',
  },
}))

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (props: string) => !['error', 'disabled'].includes(props),
})<{ error?: boolean; disabled?: boolean }>(({ theme, disabled, error = false }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  boxShadow: 'none',
  transition: 'border-color 400ms ease',
  boxSizing: 'border-box',
  border: `1px solid ${error ? theme.palette.error.main : theme.palette.grey[400]}`,
  borderRadius: 8,
  cursor: 'text',
  background: disabled ? theme.palette.background.grey : undefined,
}))
