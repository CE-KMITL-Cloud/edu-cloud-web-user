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

import { accessApi } from 'api/backend/app/access'
import { templatesApi } from 'api/backend/app/template'

import { accountStore } from 'store/account-store'

import { Instance } from 'types/instance'

export interface VmTemplateContextType {
  templates: Instance[] | null
  selectedTemplate: Instance | null
  setSelectedTemplate: Dispatch<SetStateAction<Instance | null>>
  handleTemplatesGet: (username: string) => Promise<void>
}

export const VmTemplateContext = createContext<VmTemplateContextType>({} as VmTemplateContextType)

interface VmTemplateProviderProps {
  children?: ReactNode
}

export const VmTemplateProvider = observer(({ children }: VmTemplateProviderProps) => {
  const [templates, setTemplates] = useState<Instance[]>([])

  const [selectedTemplate, setSelectedTemplate] = useState<Instance | null>(null)

  const handleTemplatesGet = useCallback(async (username: string) => {
    try {
      const ticket = await accessApi.fetchTicket('teacher2', 'teacher2')
      console.log(ticket)
      const response = await templatesApi.fetchTemplates(username)
      setTemplates(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (!accountStore.name) return
    handleTemplatesGet(accountStore.name)

    const intervalId = setInterval(() => {
      if (!accountStore.name) return
      handleTemplatesGet(accountStore.name)
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [handleTemplatesGet])

  useEffect(() => {
    console.log(templates)
  }, [templates])

  return (
    <VmTemplateContext.Provider
      value={{
        templates: templates,
        handleTemplatesGet: handleTemplatesGet,
        selectedTemplate: selectedTemplate,
        setSelectedTemplate: setSelectedTemplate,
      }}
    >
      {children}
    </VmTemplateContext.Provider>
  )
})

export const VmInstanceConsumer = VmTemplateContext.Consumer

export const useVmTemplateContext = () => useContext(VmTemplateContext)
