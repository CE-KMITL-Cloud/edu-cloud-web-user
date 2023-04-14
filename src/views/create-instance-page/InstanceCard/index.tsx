import { Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Contents, Root } from './styled'

export interface InstanceCardProps {
  header?: string
}

export type Props = PropsWithChildren<InstanceCardProps>

export const InstanceCard = ({ children, header }: Props) => {
  return (
    <Root glow={false}>
      <CoreSvg src="/static/icons/docker.svg" />
      <Contents>
        {header && <Typography variant="body1">{header}</Typography>}
        {children}
      </Contents>
    </Root>
  )
}
