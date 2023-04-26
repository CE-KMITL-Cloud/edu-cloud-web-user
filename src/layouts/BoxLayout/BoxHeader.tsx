import { Typography } from '@mui/material'
import { useMemo } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { BoxHeaderRoot, Center } from './styled'

interface BoxHeaderProps {
  iconSrc?: string
  text: string
}

export const BoxHeader = ({ text, iconSrc }: BoxHeaderProps) => {
  const isSvg = useMemo(() => iconSrc?.split('.').slice(-1)[0].toLowerCase() === 'svg', [iconSrc])
  return (
    <BoxHeaderRoot>
      {iconSrc && (
        <Center pr={1}>{isSvg ? <CoreSvg src={iconSrc} width={16} /> : <img src={iconSrc} width={16} />}</Center>
      )}
      <Typography variant="body1" color="secondary.contrastText">
        {text}
      </Typography>
    </BoxHeaderRoot>
  )
}
