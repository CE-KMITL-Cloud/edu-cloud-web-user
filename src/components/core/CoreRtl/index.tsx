import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { type ReactNode, useEffect } from 'react'
import stylisRTLPlugin from 'stylis-plugin-rtl'

type Direction = 'ltr' | 'rtl'

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [stylisRTLPlugin],
  })

interface RTLProps {
  children: ReactNode
  direction?: Direction
}

export const CoreRTL = ({ children, direction = 'ltr' }: RTLProps) => {
  useEffect(() => {
    document.dir = direction
  }, [direction])

  if (direction === 'rtl') {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>
  }

  return <>{children}</>
}
