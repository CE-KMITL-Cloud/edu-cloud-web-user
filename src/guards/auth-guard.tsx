import { needBackend } from 'dev'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

type AuthGuardProps = {
  children: ReactNode
}

export const AuthGuard = observer(({ children }: AuthGuardProps) => {
  const router = useRouter()

  const [checked, setChecked] = useState<boolean>(false)

  const check = useCallback(() => {
    if (!accountStore.isLoggedIn) {
      const searchParams = new URLSearchParams({ returnTo: window.location.href }).toString()
      const href = `${paths.login}?${searchParams}`
      router.replace(href)
    } else {
      setChecked(true)
    }
  }, [accountStore.isLoggedIn, router])

  useEffect(() => {
    // Todo: remove `needBackend`
    if (needBackend) {
      check()
    } else {
      setChecked(true)
    }
  }, [])

  if (!checked) {
    return null
  }

  return <>{children}</>
})
