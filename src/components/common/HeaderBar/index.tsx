import { Typography } from '@mui/material'
import { type ReactNode, useMemo } from 'react'

import { Iconify } from 'components/core/CoreIcon'

import { Root } from './styled'

interface HeaderBarProps {
  children?: ReactNode
  iconSrc?: string
}

export const HeaderBar = ({ iconSrc, children }: HeaderBarProps) => {
  return (
    <Root>
      <Iconify icon={iconSrc} sx={{ mr: 1 }} />
      <Typography variant="h5">{children}</Typography>
    </Root>
  )
}
