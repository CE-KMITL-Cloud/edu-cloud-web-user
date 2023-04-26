import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'
import { SvgIcon } from '@mui/material'
import { compact } from 'lodash'
import { type ReactNode, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { sidebar, translation } from 'i18n/tokens'

import { BarChart as BarChartIcon } from 'icons/BarChart'
import { Building as BuildingIcon } from 'icons/Building'
import { HomeSmile as HomeSmileIcon } from 'icons/HomeSmile'

import { paths } from 'routes/paths'

import { isValidRole } from 'utils/isValidRole'

import { Role } from 'types'
import { isPathsValueType } from 'types/route'

export interface Item {
  disabled?: boolean
  external?: boolean
  icon?: ReactNode
  items?: Item[]
  label?: ReactNode
  path?: string
  title: string
}

export interface Section {
  items: Item[]
  subheader?: string
}

export const useSections = (role: Role | 'unknown' | undefined) => {
  const { t } = useTranslation(['translation', 'sidebar'])

  const checkRole = useCallback(
    (path: string) => {
      if (!isPathsValueType(path)) {
        return false
      }

      return isValidRole(role, path)
    },
    [role],
  )

  return useMemo(
    () => [
      {
        items: compact([
          checkRole(paths.dashboard)
            ? {
                title: t(translation.dashboard),
                path: paths.dashboard,
                icon: (
                  <SvgIcon fontSize="small">
                    <HomeSmileIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
          checkRole(paths.vmInstance)
            ? {
                title: t(sidebar.vmInstance),
                path: paths.vmInstance,
                icon: (
                  <SvgIcon fontSize="small">
                    <BarChartIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
          checkRole(paths.template)
            ? {
                title: t(sidebar.vmTemplate),
                path: paths.template,
                icon: (
                  <SvgIcon fontSize="small">
                    <BuildingIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
          checkRole(paths.pool)
            ? {
                title: 'Resource Pool',
                path: paths.pool,
                icon: (
                  <SvgIcon fontSize="small">
                    <GroupIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
          checkRole(paths.user)
            ? {
                title: 'User Management',
                path: paths.user,
                icon: (
                  <SvgIcon fontSize="small">
                    <PersonIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
          checkRole(paths.registerFaculty)
            ? {
                title: 'Register Faculty',
                path: paths.registerFaculty,
                icon: (
                  <SvgIcon fontSize="small">
                    <AppRegistrationIcon />
                  </SvgIcon>
                ),
              }
            : undefined,
        ]),
      },
    ],
    [checkRole, t],
  )
}
