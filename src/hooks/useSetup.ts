import { needBackend } from 'dev'
import { useCallback, useEffect, useState } from 'react'

import { authService } from 'services/auth-service'

export const useSetup = () => {
  const [isReady, setIsReady] = useState(false)

  const setup = useCallback(async () => {
    // Todo: remove `needBackend`
    if (needBackend) {
      authService.initUser()
    }
    setIsReady(true)
  }, [])

  useEffect(() => {
    setup()
  }, [])

  return { isReady }
}
