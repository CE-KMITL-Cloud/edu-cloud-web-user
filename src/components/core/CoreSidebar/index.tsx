import { Drawer } from '@mui/material'
import { useRouter } from 'next/router'

import { SideNavSection } from 'components/core/CoreSidebar/Section'
import type { Section } from 'components/core/CoreSidebar/config'

import { Logo } from 'components/common/Logo'

import { type NavColor } from 'types/settings'

import { UserInfo } from './UserInfo'
import { Contents, LogoWrapper, SideNavSectionWrapper, StyledScrollbar } from './styled'
import { useCssVars } from './useCssVars'

const SIDE_NAV_WIDTH: number = 280

interface CoreSidebarProps {
  color?: NavColor
  sections?: Section[]
}

export const CoreSidebar = ({ color = 'evident', sections = [] }: CoreSidebarProps) => {
  const { pathname } = useRouter()

  const cssVars = useCssVars(color)

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open={true}
      PaperProps={{
        sx: {
          ...cssVars,
          backgroundColor: 'var(--nav-bg)',
          borderRightColor: 'var(--nav-border-color)',
          borderRightStyle: 'solid',
          borderRightWidth: 1,
          color: 'var(--nav-color)',
          width: SIDE_NAV_WIDTH,
        },
      }}
    >
      <StyledScrollbar>
        <Contents>
          <LogoWrapper spacing={2}>
            <Logo />
          </LogoWrapper>
          <SideNavSectionWrapper>
            {sections.map(({ items, subheader }, i) => (
              <SideNavSection items={items} key={i} pathname={pathname} subheader={subheader} />
            ))}
          </SideNavSectionWrapper>
          <UserInfo />
        </Contents>
      </StyledScrollbar>
    </Drawer>
  )
}
