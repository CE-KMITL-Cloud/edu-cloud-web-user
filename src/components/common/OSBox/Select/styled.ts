import { Select, styled } from '@mui/material'

export const StyledSelect = styled(Select<string>)(({ theme }) => ({
  width: '100%',
  borderRadius: 0,
  border: 0,
  height: 36,
  cursor: 'pointer',
  '&.Mui-focused fieldset': {
    border: 0,
    boxShadow: 'none !important', // ! Use important
  },
  '& > .MuiSelect-select': {
    padding: '0 10px',
    textAlign: 'center',
    height: 36,
    borderRadius: 0,
    border: 0,
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  '& > .MuiSelect-icon': {
    color: theme.palette.text.primary,
  },
  '& > .MuiSelect-selectMenu': {
    height: 36,
  },
  '&  fieldset': {
    border: 0,
  },
}))
