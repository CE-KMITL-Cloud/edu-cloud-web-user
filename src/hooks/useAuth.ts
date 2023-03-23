import { useContext } from 'react'

import { AuthContext, type AuthContextType as JwtAuthContextType } from 'contexts/jwt-auth-context'

type AuthContextType = JwtAuthContextType // | AmplifyAuthContextType | Auth0AuthContextType | FirebaseAuthContextType

export const useAuth = <T = AuthContextType>() => useContext(AuthContext) as T
