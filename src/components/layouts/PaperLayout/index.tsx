import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

import { Root, StyledContainer, StyledPaper } from './styled'

type PaperLayoutProps = {
  textHeader?: string
  children?: ReactNode
}

export const PaperLayout = ({ textHeader, children }: PaperLayoutProps) => {
  return (
    <Root>
      <StyledContainer>
        {textHeader && (
          <Box pb={4}>
            <Typography variant="h4" color="text.darken" textTransform="capitalize" fontWeight={700}>
              {textHeader}
            </Typography>
          </Box>
        )}
        <StyledPaper>{children}</StyledPaper>
      </StyledContainer>
    </Root>
  )
}
