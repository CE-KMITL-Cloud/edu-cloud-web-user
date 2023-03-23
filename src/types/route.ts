import { paths } from 'routes/paths'

import { Prettify } from 'types/prettify'

export type UiRouteConfigType = {
  showNavbar: boolean
  showFooter: boolean
}

export type UiRouteConfigTypeOptional = Partial<UiRouteConfigType>

export type PathsType = typeof paths

export type PathsValueType = (typeof paths)[keyof PathsType]

export type RoutesConfigType = Prettify<Record<PathsValueType, UiRouteConfigTypeOptional>>
