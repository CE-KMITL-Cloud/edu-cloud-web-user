import { observer } from 'mobx-react-lite'
import {
  Dispatch,
  type ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { poolsApi } from 'api/backend/app/pool'

import { accountStore } from 'store/account-store'

import { Pool } from 'types/pool'

export interface PoolContextType {
  pools: Pool[] | null
  selectedPool: Pool | null
  setSelectedPool: Dispatch<SetStateAction<Pool | null>>
  handlePoolsGet: (sender: string, owner: string) => Promise<void>
}

export const PoolContext = createContext<PoolContextType>({} as PoolContextType)

interface PoolProviderProps {
  children?: ReactNode
}

export const PoolProvider = observer(({ children }: PoolProviderProps) => {
  const [pools, setPools] = useState<Pool[]>([])

  const [selectedPool, setSelectedPool] = useState<Pool | null>(null)

  const handlePoolsGet = useCallback(async (sender: string, owner: string) => {
    try {
      if (accountStore.role === 'student') {
        const response = await poolsApi.fetchMemberPools(sender)
        setPools(response)
      } else {
        const response = await poolsApi.fetchOwnerPools(sender, owner)
        setPools(response)
      }
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (!accountStore.email) return
    handlePoolsGet(accountStore.email, accountStore.email)

    const intervalId = setInterval(() => {
      if (!accountStore.email) return
      handlePoolsGet(accountStore.email, accountStore.email)
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [handlePoolsGet])

  useEffect(() => {
    console.log(pools)
  }, [pools])

  return (
    <PoolContext.Provider
      value={{
        pools: pools,
        handlePoolsGet: handlePoolsGet,
        selectedPool: selectedPool,
        setSelectedPool: setSelectedPool,
      }}
    >
      {children}
    </PoolContext.Provider>
  )
})

export const PoolConsumer = PoolContext.Consumer

export const usePoolContext = () => useContext(PoolContext)
