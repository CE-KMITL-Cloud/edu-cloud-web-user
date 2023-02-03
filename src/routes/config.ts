import { RouteRole } from 'types/enums'
import { Routes } from 'types/route'

export const ROUTES_CONFIG: Routes = [
  {
    path: '/',
    role: RouteRole.ALL,
    showNavbar: true,
    showFooter: true,
  },
  {
    path: '/login',
    role: RouteRole.NOT_AUTH,
    showNavbar: false,
    showFooter: true,
  },
  {
    path: '/about',
    role: RouteRole.ALL,
    showNavbar: true,
    showFooter: true,
  },
  {
    path: '/service',
    role: RouteRole.ALL,
    showNavbar: true,
    showFooter: true,
  },
  {
    path: '/blog',
    role: RouteRole.ALL,
    showNavbar: true,
    showFooter: true,
  },
  {
    path: '/document',
    role: RouteRole.ALL,
    showNavbar: true,
    showFooter: true,
  },
]
