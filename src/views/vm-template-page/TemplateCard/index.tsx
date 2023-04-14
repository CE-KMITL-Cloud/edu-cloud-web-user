import { Typography } from '@mui/material'
import { ReactNode } from 'react'

import { Root, StyledDivider, TextWrapper } from './styled'

export interface TemplateCardProps {
  children?: ReactNode
  HeaderText?: string
  glowing?: boolean
  className?: string
}

export const TemplateCard = ({ children, HeaderText, glowing, className }: TemplateCardProps) => {
  return (
    <Root className={className}>
      {HeaderText && (
        <>
          <TextWrapper>
            <Typography variant="h6" color={glowing ? 'primary.main' : 'text.primary'}>
              {HeaderText}
            </Typography>
          </TextWrapper>
          <StyledDivider />
        </>
      )}
      {children}
    </Root>
  )
}
