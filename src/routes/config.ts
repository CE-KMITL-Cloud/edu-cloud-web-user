import { paths } from 'routes/paths'

import { type RoutesConfigType } from 'types/route'

export const ROUTES_CONFIG: RoutesConfigType = {
  [paths.index]: {
    showNavbar: true,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.login]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: true,
      student: false,
      faculty: false,
      admin: false,
    },
  },
  [paths.about]: {
    showNavbar: true,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.blog]: {
    showNavbar: true,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.document]: {
    showNavbar: true,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.dashboard]: {
    showNavbar: false,
    showFooter: false,
    protect: {
      guess: false,
      student: false,
      faculty: false,
      admin: true,
    },
  },

  // [paths.createInstance]: {
  //   showNavbar: false,
  //   showFooter: true,
  //   protect: {
  //     guess: false,
  //     student: false,
  //     faculty: true,
  //     admin: true,
  //   },
  // },
  [paths.template]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.register]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: true,
      student: false,
      faculty: false,
      admin: false,
    },
  },
  [paths.vmCreate]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: false,
      faculty: true,
      admin: true,
    },
  },
  [paths.vmInstance]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths.pool]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  // [paths.vmConsole]: {
  //   showNavbar: false,
  //   showFooter: true,
  // },
  [paths.user]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: false,
      faculty: false,
      admin: true,
    },
  },
  [paths.registerFaculty]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: false,
      student: false,
      faculty: false,
      admin: true,
    },
  },

  // * Status
  [paths[401]]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths[404]]: {
    showNavbar: false,
    showFooter: true,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
  [paths[500]]: {
    showNavbar: false,
    showFooter: false,
    protect: {
      guess: true,
      student: true,
      faculty: true,
      admin: true,
    },
  },
}
