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
  exp: number
  iat: number
  isRefreshToken?: boolean
}
