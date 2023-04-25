import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { ROUTES_CONFIG } from 'routes/config'
import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

import { isPathsValueType } from 'types/route'

type AuthGuardProps = {
  children: ReactNode
}

export const RoleGuard = observer(({ children }: AuthGuardProps) => {
  const router = useRouter()

  const [checked, setChecked] = useState<boolean>(false)

  const check = useCallback(() => {
    if (!accountStore.role) {
      return
    }

    const pathname = router.pathname

    if (!isPathsValueType(pathname)) {
      return
    }

    const currentConfig = ROUTES_CONFIG[pathname]

    if (!accountStore.isLoggedIn && currentConfig.protect.guess) {
      setChecked(true)
      return
    }

    if (accountStore.role === 'student' && currentConfig.protect.student) {
      setChecked(true)
      return
    }

    if (accountStore.role === 'faculty' && currentConfig.protect.faculty) {
      setChecked(true)
      return
    }

    if (accountStore.role === 'admin' && currentConfig.protect.admin) {
      setChecked(true)
      return
    }

    if (pathname === paths.login) {
      router.replace(paths.index)
    }

    if (accountStore.role === 'unknown') {
      router.replace(paths.login)
      return
    }

    if (accountStore.role === 'student' || accountStore.role === 'faculty') {
      router.replace(paths.vmInstance)
      return
    }

    if (accountStore.role === 'admin') {
      router.replace(paths.dashboard)
      return
    }

    router.replace(paths.index)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountStore.role, router, accountStore.isLoggedIn])

  useEffect(() => {
    check()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountStore.role, router])

  if (!checked) {
    return null
  }

  return <>{children}</>
})
