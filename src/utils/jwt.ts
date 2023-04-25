import jwt_decode from 'jwt-decode'

import { JwtPayload } from 'types'

export const getJwtTokenData = (token: string): JwtPayload => {
  try {
    const tokenParts = jwt_decode<JwtPayload>(token)

    const isRefreshToken: boolean | undefined = tokenParts.isRefreshToken
    const email: string = tokenParts.email
    const name: string = tokenParts.name
    const exp: number = tokenParts.exp
    const iat: number = tokenParts.iat
    const role: string = tokenParts.role

    return {
      isRefreshToken,
      email,
      name,
      exp,
      iat,
      role,
    }
  } catch (err) {
    throw new Error('getJwtTokenData error')
  }
}
