import { useRouter } from 'next/router'
import { ReactNode, useMemo } from 'react'

import { Footer } from 'components/core/CoreFooter'
import { Navbar } from 'components/core/CoreNavbar'

import { ROUTES_CONFIG } from 'routes/config'

import { ContentWrapper, Screen } from './styled'

type Props = {
  children: ReactNode
}

export const PageWrapper = ({ children }: Props) => {
  const router = useRouter()

  const route = useMemo(() => ROUTES_CONFIG.find((route) => router.pathname === route.path), [router.pathname])

  return (
    <Screen>
      {route?.showNavbar && <Navbar />}
      <ContentWrapper>{children}</ContentWrapper>
      {route?.showFooter && <Footer />}
    </Screen>
  )
}
