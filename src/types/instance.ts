export interface Instance {
  vmid: number
  id: string
  type: string
  template: number
  node: string
  name: string
  status: string
  maxdisk: number
  maxcpu: number
  maxmem: number
}

export interface CreateInstance {
  name: string
  memory: number // in MB
  cores: number
  disk: string // in GB
  cdrom: string
  storage: string
}

// "name": "test-create-1",
//   "memory": 2024,
//   "cores": 2,
//   "cdrom": "ubuntu-20.04.4-live-server-amd64.iso",
//   "storage": "ceph-vm",
//   "disk": "2"

export type InstanceSpec = {
  maxdisk: number
  maxcpu: number 
  maxmem: number 
}