import { Os } from 'types/enums'

export const getOsSvg = (os: Os): string => {
  switch (os) {
    case Os.WINDOWS:
      return '/static/icons/os/windows.svg'
    case Os.UBUNTU:
      return '/static/icons/os/ubuntu.svg'
    case Os.CENTOS:
      return '/static/icons/os/centos.svg'
    default:
      console.error(`Unknown OS: ${os}`)
      return ''
  }
}
