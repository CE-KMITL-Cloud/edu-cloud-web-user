import { Typography } from '@mui/material'
import { type ReactNode, useMemo } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Center, Root } from './styled'

interface HeaderBarProps {
  children?: ReactNode
  iconSrc?: string
}

export const HeaderBar = ({ iconSrc, children }: HeaderBarProps) => {
  const isSvg = useMemo(() => iconSrc?.split('.').slice(-1)[0].toLowerCase() === 'svg', [iconSrc])

  return (
    <Root>
      {iconSrc && (
        <Center pr={2}>{isSvg ? <CoreSvg src={iconSrc} width={24} /> : <img src={iconSrc} width={24} />}</Center>
      )}
      <Typography variant="h5">{children}</Typography>
    </Root>
  )
}
