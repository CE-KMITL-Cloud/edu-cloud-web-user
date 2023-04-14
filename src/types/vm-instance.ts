export type VmSpec = {
  os: string
  vCPUs: number
  RAM: number // * in GB
  storage: string // * e.g., "200GB HDD", "500GB SSD"
}

export type VmInstanceType = {
  id: string // *unique
  name: string
  spec: VmSpec
  ipAddress: string
  isActive: boolean
}
