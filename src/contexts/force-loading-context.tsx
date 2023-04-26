import { observer } from 'mobx-react-lite'
import { Dispatch, type ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from 'react'

export interface ForceLoadingContextType {
  isForceLoading: boolean
  setIsForceLoading: Dispatch<SetStateAction<boolean>>
  load: (timeout: number) => Promise<void>
}

export const ForceLoadingContext = createContext<ForceLoadingContextType>({} as ForceLoadingContextType)

interface ForceLoadingProviderProps {
  children?: ReactNode
}

export const ForceLoadingProvider = observer(({ children }: ForceLoadingProviderProps) => {
  const [isForceLoading, setIsForceLoading] = useState<boolean>(false)

  const load = useCallback(async (timeout: number) => {
    setIsForceLoading(true)
    return await new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsForceLoading(false)
        resolve()
      }, timeout)
    })
  }, [])

  return (
    <ForceLoadingContext.Provider
      value={{
        isForceLoading,
        setIsForceLoading,
        load,
      }}
    >
      {children}
    </ForceLoadingContext.Provider>
  )
})

export const ForceLoadingConsumer = ForceLoadingContext.Consumer

export const useForceLoadingContext = () => useContext(ForceLoadingContext)
