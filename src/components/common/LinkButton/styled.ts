import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button, { shouldForwardProp: (props: string) => !['glow'].includes(props) })<{
  glow: boolean
}>(({ theme, glow }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: glow ? theme.palette.primary.main : theme.palette.background.dark,
}))
