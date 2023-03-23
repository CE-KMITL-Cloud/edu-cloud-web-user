import { Box, Typography } from '@mui/material'
import { type ReactNode } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Root } from './styled'

interface HeaderBarProps {
  children?: ReactNode
  iconSrc?: string
}

export const HeaderBar = ({ iconSrc, children }: HeaderBarProps) => {
  return (
    <Root>
      {iconSrc && (
        <Box pr={2}>
          <CoreSvg src={iconSrc} width={32} />
        </Box>
      )}
      <Typography variant="h4">{children}</Typography>
    </Root>
  )
}
