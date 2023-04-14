import GroupIcon from '@mui/icons-material/Group'
import { SvgIcon } from '@mui/material'
import { type ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { sidebar, translation } from 'i18n/tokens'

import { BarChart as BarChartIcon } from 'icons/BarChart'
import { Building as BuildingIcon } from 'icons/Building'
import { HomeSmile as HomeSmileIcon } from 'icons/HomeSmile'

import { paths } from 'routes/paths'

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

export const useSections = () => {
  const { t } = useTranslation(['translation', 'sidebar'])

  return useMemo(
    () => [
      {
        items: [
          {
            title: t(translation.dashboard),
            path: paths.dashboard,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(sidebar.vmInstance),
            path: paths.vmInstance,
            icon: (
              <SvgIcon fontSize="small">
                <BarChartIcon />
              </SvgIcon>
            ),
          },
          {
            title: t(sidebar.vmTemplate),
            path: paths.vmTemplate,
            icon: (
              <SvgIcon fontSize="small">
                <BuildingIcon />
              </SvgIcon>
            ),
          },
          {
            title: 'Pool',
            path: paths.pool,
            icon: (
              <SvgIcon fontSize="small">
                <GroupIcon />
              </SvgIcon>
            ),
          },
        ],
      },
    ],
    [t],
  )
}
