import { useCallback, useEffect, useState } from 'react'

import { authService } from 'services/auth-service'

export const useSetup = () => {
  const [isReady, setIsReady] = useState(false)

  const setup = useCallback(async () => {
    authService.initUser()

    setIsReady(true)
  }, [])

  useEffect(() => {
    setup()
  }, [])

  return { isReady }
}
