import { RouteRole } from 'types/enums'

export type UiRouteConfigType = {
  showNavbar: boolean
  showFooter: boolean
}

export type RouteType = {
  path: string
  role: RouteRole
}

export type RouteConfig = RouteType & Partial<UiRouteConfigType>

export type Routes = RouteConfig[]
