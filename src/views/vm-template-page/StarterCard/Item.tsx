import { Typography } from '@mui/material'
import { MouseEvent } from 'react'

import { Prettify } from 'types/prettify'
import { VmSpec } from 'types/vm-instance'

import { DescriptionWrapper, InnerBox, ItemRoot } from './styled'

export interface OsItemCardProps {
  id: string
  size?: 's' | 'm' | 'l' | 'xl'
  glow?: boolean
  spec: Prettify<Omit<VmSpec, 'os'>>
  onChange?: (id: string) => void
}

export const OsItemCard = ({ id, glow = false, size, spec, onChange }: OsItemCardProps) => {
  const handleClick = (_: MouseEvent<HTMLDivElement>) => {
    onChange?.(id)
  }

  return (
    <ItemRoot glow={glow} onClick={handleClick}>
      <InnerBox className="inner-box">
        <Typography variant="h2" textTransform="uppercase" textAlign="center" color="primary.contrastText">
          {size ?? '?'}
        </Typography>
      </InnerBox>
      <DescriptionWrapper glow={glow}>
        <Typography variant="body1" fontWeight="inherit" color="inherit" textAlign="center">
          {spec.vCPUs} vCPU
        </Typography>
        <Typography variant="body1" fontWeight="inherit" color="inherit" textAlign="center">
          {spec.RAM} GB RAM
        </Typography>
        <Typography variant="body1" fontWeight="inherit" color="inherit" textAlign="center">
          {spec.storage}
        </Typography>
      </DescriptionWrapper>
    </ItemRoot>
  )
}
