import { VmInstanceType } from 'types/vm-instance'

export const mockVmInstances: VmInstanceType[] = [
  {
    id: 'vm-01',
    name: 'Web Server',
    spec: {
      os: 'Ubuntu 20.04',
      vCPUs: 4,
      RAM: 16,
      storage: '200GB HDD',
    },
    ipAddress: '192.168.0.101',
    isActive: true,
  },
  {
    id: 'vm-02',
    name: 'Database Server',
    spec: {
      os: 'Windows Server 2019',
      vCPUs: 8,
      RAM: 32,
      storage: '500GB SSD',
    },
    ipAddress: '192.168.0.102',
    isActive: true,
  },
  {
    id: 'vm-03',
    name: 'Load Balancer',
    spec: {
      os: 'CentOS 7',
      vCPUs: 2,
      RAM: 8,
      storage: '100GB HDD',
    },
    ipAddress: '192.168.0.103',
    isActive: false,
  },
  {
    id: 'vm-04',
    name: 'Development Environment',
    spec: {
      os: 'macOS Big Sur',
      vCPUs: 2,
      RAM: 8,
      storage: '100GB SSD',
    },
    ipAddress: '192.168.0.104',
    isActive: true,
  },
  {
    id: 'vm-05',
    name: 'Testing Environment',
    spec: {
      os: 'Debian 10',
      vCPUs: 4,
      RAM: 16,
      storage: '200GB SSD',
    },
    ipAddress: '192.168.0.105',
    isActive: false,
  },
  {
    id: 'vm-06',
    name: 'Mail Server',
    spec: {
      os: 'Ubuntu 18.04',
      vCPUs: 2,
      RAM: 4,
      storage: '50GB SSD',
    },
    ipAddress: '192.168.0.106',
    isActive: true,
  },
  {
    id: 'vm-07',
    name: 'FTP Server',
    spec: {
      os: 'Windows Server 2016',
      vCPUs: 4,
      RAM: 16,
      storage: '300GB HDD',
    },
    ipAddress: '192.168.0.107',
    isActive: false,
  },
  {
    id: 'vm-08',
    name: 'VPN Server',
    spec: {
      os: 'CentOS 8',
      vCPUs: 4,
      RAM: 8,
      storage: '100GB SSD',
    },
    ipAddress: '192.168.0.108',
    isActive: true,
  },
  {
    id: 'vm-09',
    name: 'Backup Server',
    spec: {
      os: 'Windows Server 2012 R2',
      vCPUs: 2,
      RAM: 8,
      storage: '500GB HDD',
    },
    ipAddress: '192.168.0.109',
    isActive: true,
  },
  {
    id: 'vm-10',
    name: 'Proxy Server',
    spec: {
      os: 'Debian 11',
      vCPUs: 2,
      RAM: 4,
      storage: '50GB SSD',
    },
    isActive: true,
    ipAddress: '192.168.0.110',
  },
]
