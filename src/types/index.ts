import { type Dayjs } from 'dayjs'

export * from './function-result'

export type User = {
  email: string
  name: string
  status: boolean
  createTime: Dayjs
  expireTime: Dayjs
}

export type JwtPayload = {
  name: string
  email: string
  role: string
  exp: number
  iat: number
  isRefreshToken?: boolean
}

export type Role = 'admin' | 'student' | 'faculty'

export const isRole = (str: string): str is Role => {
  return str === 'admin' || str === 'faculty' || str === 'student'
}
