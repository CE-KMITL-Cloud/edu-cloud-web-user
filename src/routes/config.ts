import { paths } from 'routes/paths'

import { type RoutesConfigType } from 'types/route'

export const ROUTES_CONFIG: RoutesConfigType = {
  [paths.index]: {
    showNavbar: true,
    showFooter: true,
  },
  [paths.login]: {
    showNavbar: false,
    showFooter: true,
  },
  [paths.about]: {
    showNavbar: true,
    showFooter: true,
  },
  [paths.service]: {
    showNavbar: true,
    showFooter: true,
  },
  [paths.blog]: {
    showNavbar: true,
    showFooter: true,
  },
  [paths.document]: {
    showNavbar: true,
    showFooter: true,
  },
  [paths.dashboard]: {
    showNavbar: false,
    showFooter: false,
  },

  // TODO: fixed to footer layout
  [paths.createInstance]: {
    showNavbar: false,
    showFooter: true,
  },
  [paths.vmTemplate]: {
    showNavbar: false,
    showFooter: true,
  },
  [paths.vmInstance]: {
    showNavbar: false,
    showFooter: true,
  },

  // * Status
  [paths[401]]: {
    showNavbar: false,
    showFooter: true,
  },
  [paths[404]]: {
    showNavbar: false,
    showFooter: true,
  },
  [paths[500]]: {
    showNavbar: false,
    showFooter: false,
  },
}
