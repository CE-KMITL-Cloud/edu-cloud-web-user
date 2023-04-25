import { paths } from 'routes/paths'

import { Prettify } from 'types/prettify'

export type PortectRouteConfigType = {
  guess: boolean
  student: boolean
  faculty: boolean
  admin: boolean
}

export type UiRouteConfigType = {
  showNavbar?: boolean
  showFooter?: boolean
  protect: PortectRouteConfigType
}

export type PathsType = typeof paths

export type PathsValueType = (typeof paths)[keyof PathsType]

export type RoutesConfigType = Prettify<Record<PathsValueType, UiRouteConfigType>>

export const isPathsValueType = (x: string): x is PathsValueType => {
  return Object.values(paths).find((predicate) => predicate === x) !== undefined
}
