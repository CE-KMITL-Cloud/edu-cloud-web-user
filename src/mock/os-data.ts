import { OSBoxProps } from 'components/common/OSBox'

import { Os } from 'types/enums'

import { OsItemCardProps } from 'views/vm-template-page/StarterCard/Item'

export const osMockData: OSBoxProps[] = [
  {
    os: Os.WINDOWS,
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultOption: 'Option 1',
  },
  {
    os: Os.UBUNTU,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    defaultOption: 'Option C',
  },
  {
    os: Os.CENTOS,
    options: ['Option X', 'Option Y', 'Option Z'],
  },
]

// * Unique size
export const osStarterMockData: Array<OsItemCardProps & { id: string }> = [
  {
    id: 's',
    size: 's',
    spec: {
      vCPUs: 1,
      RAM: 1,
      storage: '20GB SSD',
    },
  },
  {
    id: 'm',
    size: 'm',
    spec: {
      vCPUs: 1,
      RAM: 2,
      storage: '30GB SSD',
    },
  },
  {
    id: 'l',
    size: 'l',
    spec: {
      vCPUs: 2,
      RAM: 2,
      storage: '40GB SSD',
    },
  },
  {
    id: 'xl',
    size: 'xl',
    spec: {
      vCPUs: 2,
      RAM: 4,
      storage: '60GB SSD',
    },
  },
  {
    id: 'something',
    spec: {
      vCPUs: 8,
      RAM: 24,
      storage: '512GB SSD',
    },
  },
]
