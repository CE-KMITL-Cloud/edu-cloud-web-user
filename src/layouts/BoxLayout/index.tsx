import { type ReactNode } from 'react'

import { BoxHeader } from './BoxHeader'
import { FullHeightStretchContainer, Root, StyledPaper } from './styled'

interface BoxLayoutProps {
  textHeader?: string
  iconSrc?: string
  children?: ReactNode
}

export const BoxLayout = ({ iconSrc, textHeader, children }: BoxLayoutProps) => {
  return (
    <Root>
      <FullHeightStretchContainer>
        <StyledPaper>
          {textHeader && <BoxHeader iconSrc={iconSrc} text={textHeader} />}
          {children}
        </StyledPaper>
      </FullHeightStretchContainer>
    </Root>
  )
}
