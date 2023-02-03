import { useMemo } from 'react'

export const useSmartSize = (widthProps?: string | number, heightProps?: string | number) => {
  const { width, height } = useMemo(() => {
    // * Both `Width` and `Height` are existed.
    if (heightProps && widthProps) {
      return { width: widthProps, height: heightProps }
    }

    // * Either `Width` or `Height` existed, they will have the same length.
    const sideLength = heightProps ?? widthProps ?? '32px'
    return { width: sideLength, height: sideLength }
  }, [widthProps, heightProps])

  return { width, height }
}
