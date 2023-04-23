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

import { userApi } from 'api/backend/service/user'

import { accountStore } from 'store/account-store'

import { User } from 'types'

export interface UserManagementContextType {
  students: User[] | null
  faculties: User[] | null
  selectedUser: User | null
  setSelectedUser: Dispatch<SetStateAction<User | null>>
  handleStudentsGet: (sender: string) => Promise<void>
  handleFacutiesGet: (sender: string) => Promise<void>
}

export const UserManagementContext = createContext<UserManagementContextType>({} as UserManagementContextType)

interface UserManagementProviderProps {
  children?: ReactNode
}

export const UserManagementProvider = observer(({ children }: UserManagementProviderProps) => {
  const [students, setStudents] = useState<User[]>([])
  const [faculties, setFaculties] = useState<User[]>([])

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleStudentsGet = useCallback(async (sender: string) => {
    try {
      const response = await userApi.fetchStudents(sender)
      console.log(response)
      setStudents(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    // if (!accountStore.name) return
    // handleStudentsGet(accountStore.name)
    handleStudentsGet('admin')

    const intervalId = setInterval(() => {
      // if (!accountStore.name) return
      // handleStudentsGet(accountStore.name)
      handleStudentsGet('admin')
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [handleStudentsGet])

  useEffect(() => {
    console.log(students)
  }, [students])

  const handleFacultiesGet = useCallback(async (sender: string) => {
    try {
      const response = await userApi.fetchFaculties(sender)
      console.log(response)
      setFaculties(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    // if (!accountStore.name) return
    // handleFacultiesGet(accountStore.name)
    handleFacultiesGet('admin')

    const intervalId = setInterval(() => {
      // todo : testing
      // if (!accountStore.name) return
      // handleFacultiesGet(accountStore.name)
      handleFacultiesGet('admin')
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [handleFacultiesGet])

  useEffect(() => {
    console.log(faculties)
  }, [faculties])

  return (
    <UserManagementContext.Provider
      value={{
        students: students,
        faculties: faculties,
        handleStudentsGet: handleStudentsGet,
        handleFacutiesGet: handleFacultiesGet,
        selectedUser: selectedUser,
        setSelectedUser: setSelectedUser,
      }}
    >
      {children}
    </UserManagementContext.Provider>
  )
})

export const UserManagementConsumer = UserManagementContext.Consumer

export const useUserManagementContext = () => useContext(UserManagementContext)
