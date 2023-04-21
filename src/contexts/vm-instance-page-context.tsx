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

import { instancesApi } from 'api/backend/service/instance'

import { accountStore } from 'store/account-store'

import { Instance } from 'types/instance'

export interface VmInstanceContextType {
  instances: Instance[]
  selectedInstance: Instance | null
  setSelectedInstance: Dispatch<SetStateAction<Instance | null>>
  handleInstancesGet: (username: string) => Promise<void>
}

export const VmInstanceContext = createContext<VmInstanceContextType>({} as VmInstanceContextType)

interface VmInstanceProviderProps {
  children?: ReactNode
}

export const VmInstanceProvider = observer(({ children }: VmInstanceProviderProps) => {
  const [instances, setInstances] = useState<Instance[]>([])

  const [selectedInstance, setSelectedInstance] = useState<Instance | null>(null)

  const handleInstancesGet = useCallback(async (username: string) => {
    try {
      const response = await instancesApi.fetchInstances(username)
      setInstances(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (!accountStore.name) return
    handleInstancesGet(accountStore.name)

    const intervalId = setInterval(() => {
      if (!accountStore.name) return
      handleInstancesGet(accountStore.name)
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [handleInstancesGet])

  useEffect(() => {
    console.log(instances)
  }, [instances])

  return (
    <VmInstanceContext.Provider
      value={{
        instances: instances,
        handleInstancesGet: handleInstancesGet,
        selectedInstance: selectedInstance,
        setSelectedInstance: setSelectedInstance,
      }}
    >
      {children}
    </VmInstanceContext.Provider>
  )
})

export const VmInstanceConsumer = VmInstanceContext.Consumer

export const useVmInstanceContext = () => useContext(VmInstanceContext)
