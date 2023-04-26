export interface Pool {
  ID: number
  Owner: string
  Code: string
  Name: string
  VMID: string[]
  Member: string[]
  Status: boolean
  CreateTime: string
  ExpireTime: string
}
