export * from './function-result'

// export type User = {
//   email: string
//   name: string
//   status: boolean
//   createTime: Dayjs
//   expireTime: Dayjs
// }

export type User = {
  Username: string
  Password: string
  Name: string
  Status: boolean
  CreateTime: string
  ExpireTime: string
  Salt: string
}

export type UserLimit = {
  Username: string
  MaxCPU: number
  MaxRAM: number
  MaxDisk: number
  MaxInstance: number
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
