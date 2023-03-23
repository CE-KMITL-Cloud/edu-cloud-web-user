import { useRouter } from 'next/router'
import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { paths } from 'routes/paths'

import { useAuth } from 'hooks/useAuth'

import { Issuer } from 'types/enums'

const loginPaths: Record<Issuer, string> = {
  [Issuer.Amplify]: paths.login,
  [Issuer.Auth0]: paths.login,
  [Issuer.Firebase]: paths.login,
  [Issuer.JWT]: paths.login,
}

type AuthGuardProps = {
  children: ReactNode
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter()
  const { isAuthenticated, issuer } = useAuth()

  const [checked, setChecked] = useState<boolean>(false)

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({ returnTo: window.location.href }).toString()
      const href = loginPaths[issuer] + `?${searchParams}`
      router.replace(href)
    } else {
      setChecked(true)
    }
  }, [isAuthenticated, issuer, router])

  useEffect(() => {
    check()
  }, [])

  if (!checked) {
    return null
  }

  return <>{children}</>
}
