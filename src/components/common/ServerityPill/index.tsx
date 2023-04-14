import { type ReactNode } from 'react'

import { type SeverityPillColor, SeverityPillRoot } from './styled'

export interface SeverityPillProps {
  text?: ReactNode
  color?: SeverityPillColor
  minWidth?: number
}

export const SeverityPill = ({ text, ...restProps }: SeverityPillProps) => {
  return <SeverityPillRoot {...restProps}>{text}</SeverityPillRoot>
}
