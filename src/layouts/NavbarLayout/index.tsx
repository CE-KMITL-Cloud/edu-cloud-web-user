import { useRouter } from 'next/router'
import { type ReactNode, useMemo } from 'react'

import { Footer } from 'components/common/Footer'
import { Navbar } from 'components/common/Navbar'

import { ROUTES_CONFIG } from 'routes/config'

import { isPathsValueType } from 'types/route'

import { ContentWrapper, Root } from './styled'

interface NavbarLayoutProps {
  children: ReactNode
}

export const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const router = useRouter()

  const routeConfig = useMemo(() => {
    if (isPathsValueType(router.pathname)) {
      return ROUTES_CONFIG[router.pathname]
    }
    return {}
  }, [router.pathname])

  return (
    <Root>
      {routeConfig?.showNavbar && <Navbar />}
      <ContentWrapper>{children}</ContentWrapper>
      {routeConfig?.showFooter && <Footer />}
    </Root>
  )
}
