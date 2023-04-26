import PropTypes from 'prop-types'

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

export type InstanceSpec = {
  maxdisk: number
  maxcpu: number
  maxmem: number
}

export const InstancePropTypes = PropTypes.shape({
  vmid: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  template: PropTypes.number.isRequired,
  node: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  maxdisk: PropTypes.number.isRequired,
  maxcpu: PropTypes.number.isRequired,
  maxmem: PropTypes.number.isRequired,
})
