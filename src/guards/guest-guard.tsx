import { needBackend } from 'dev'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

interface GuestGuardProps {
  children: ReactNode
}

export const GuestGuard = observer(({ children }: GuestGuardProps) => {
  const router = useRouter()

  const [checked, setChecked] = useState<boolean>(false)

  const check = useCallback(() => {
    if (accountStore.isLoggedIn) {
      router.replace(paths.index)
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
