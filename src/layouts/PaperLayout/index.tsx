import { Typography } from '@mui/material'
import { type ReactNode } from 'react'

import { Root, StyledContainer, StyledPaper, TypoWrapper } from './styled'

interface PaperLayoutProps {
  textHeader?: string
  children?: ReactNode
}

export const PaperLayout = ({ textHeader, children }: PaperLayoutProps) => {
  return (
    <Root>
      <StyledContainer>
        {textHeader && (
          <TypoWrapper>
            <Typography variant="h4" color="text.darken" textTransform="capitalize" fontWeight={700}>
              {textHeader}
            </Typography>
          </TypoWrapper>
        )}
        <StyledPaper>{children}</StyledPaper>
      </StyledContainer>
    </Root>
  )
}
