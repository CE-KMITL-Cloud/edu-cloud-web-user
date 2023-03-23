import { type ReactNode, createContext, useCallback, useEffect, useReducer } from 'react'

import { authApi } from 'api/auth-api'

import { ACCESS_TOKEN_KEY } from 'constants/storageKey'

import type { User } from 'types'
import { Issuer } from 'types/enums'

interface State {
  isInitialized: boolean
  isAuthenticated: boolean
  user: User | null
}

enum ActionType {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
}

type ActionTemplate<T extends ActionType, P = undefined> = P extends undefined
  ? {
      type: T
    }
  : {
      type: T
      payload: P
    }

type InitializeAction = ActionTemplate<
  ActionType.INITIALIZE,
  {
    isAuthenticated: boolean
    user: User | null
  }
>

type SignInAction = ActionTemplate<
  ActionType.SIGN_IN,
  {
    user: User
  }
>

type SignUpAction = ActionTemplate<
  ActionType.SIGN_UP,
  {
    user: User
  }
>

type SignOutAction = ActionTemplate<ActionType.SIGN_OUT>

type Action = InitializeAction | SignInAction | SignUpAction | SignOutAction

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INITIALIZE: {
      const { isAuthenticated, user } = action.payload
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      }
    }
    case ActionType.SIGN_IN: {
      const { user } = action.payload
      return {
        ...state,
        isAuthenticated: true,
        user,
      }
    }
    case ActionType.SIGN_UP: {
      const { user } = action.payload
      return {
        ...state,
        isAuthenticated: true,
        user,
      }
    }
    case ActionType.SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    }
  }
}

export interface AuthContextType extends State {
  issuer: Issuer.JWT
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, name: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  issuer: Issuer.JWT,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const initialize = useCallback(async () => {
    try {
      const accessToken = window.sessionStorage.getItem(ACCESS_TOKEN_KEY)

      if (accessToken) {
        const user = await authApi.me({ accessToken })

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        })
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    } catch (err) {
      console.error(err)
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      })
    }
  }, [dispatch])

  useEffect(
    () => {
      initialize()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const signIn = useCallback(
    async (email: string, password: string) => {
      const { accessToken } = await authApi.signIn({ email, password })
      const user = await authApi.me({ accessToken })

      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken)

      dispatch({
        type: ActionType.SIGN_IN,
        payload: {
          user,
        },
      })
    },
    [dispatch],
  )

  const signUp = useCallback(
    async (email: string, name: string, password: string) => {
      const { accessToken } = await authApi.signUp({ email, name, password })
      const user = await authApi.me({ accessToken })

      sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken)

      dispatch({
        type: ActionType.SIGN_UP,
        payload: {
          user,
        },
      })
    },
    [dispatch],
  )

  const signOut = useCallback(async () => {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    dispatch({ type: ActionType.SIGN_OUT })
  }, [dispatch])

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.JWT,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
