import { Box, ButtonBase, styled } from '@mui/material'

export const ContentsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '50%',
  bottom: 0,
  boxShadow: theme.shadows[16],
  margin: theme.spacing(4),
  position: 'fixed',
  right: 0,
  zIndex: theme.zIndex.speedDial,
}))

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  color: theme.palette.primary.contrastText,
  padding: '10px',
}))
