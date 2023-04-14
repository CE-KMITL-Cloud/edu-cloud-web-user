import { Typography } from '@mui/material'
import { CSSProperties } from 'react'

import { StyledMenuItem } from './styled'

export interface DropdownMenuItemProps {
  text: string
  textTransform?: CSSProperties['textTransform']
  onClick?: () => void
}

export const DropdownMenuItem = ({ onClick, text, textTransform }: DropdownMenuItemProps) => (
  <StyledMenuItem onClick={onClick}>
    <Typography variant="body2" color="inherit" textAlign="center" width="100%" textTransform={textTransform}>
      {text}
    </Typography>
  </StyledMenuItem>
)
