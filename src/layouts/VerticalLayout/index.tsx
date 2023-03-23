import type { Theme } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { type ReactNode } from 'react'

import { CoreSidebar } from 'components/core/CoreSidebar'
import type { Section } from 'components/core/CoreSidebar/config'

import type { NavColor } from 'types/settings'

import { VerticalLayoutContainer, VerticalLayoutRoot } from './styled'

interface VerticalLayoutProps {
  children?: ReactNode
  navColor?: NavColor
  sections?: Section[]
}

export const VerticalLayout = ({ children, sections, navColor }: VerticalLayoutProps) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <>
      {lgUp && <CoreSidebar color={navColor} sections={sections} />}
      <VerticalLayoutRoot>
        <VerticalLayoutContainer>{children}</VerticalLayoutContainer>
      </VerticalLayoutRoot>
    </>
  )
}
