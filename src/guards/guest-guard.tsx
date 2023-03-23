import { useRouter } from 'next/router'
import { type ReactNode, useCallback, useEffect, useState } from 'react'

import { paths } from 'routes/paths'

import { useAuth } from 'hooks/useAuth'

interface GuestGuardProps {
  children: ReactNode
}

export const GuestGuard = ({ children }: GuestGuardProps) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const [checked, setChecked] = useState<boolean>(false)

  const check = useCallback(() => {
    if (isAuthenticated) {
      router.replace(paths.index)
    } else {
      setChecked(true)
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    check()
  }, [])

  if (!checked) {
    return null
  }

  return <>{children}</>
}
