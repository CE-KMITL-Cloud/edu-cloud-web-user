import { SvgIcon } from '@mui/material'
import { type ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { sidebar } from 'i18n/tokens'

import BarChartSquare02Icon from 'icons/untitled-ui/duocolor/bar-chart-square-02'
import Building04Icon from 'icons/untitled-ui/duocolor/building-04'
import HomeSmileIcon from 'icons/untitled-ui/duocolor/home-smile'

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
  const { t } = useTranslation('sidebar')
  return useMemo(
    () => [
      {
        items: [
          {
            title: t(sidebar.dashboard),
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
                <BarChartSquare02Icon />
              </SvgIcon>
            ),
          },
          {
            title: t(sidebar.vmTemplate),
            path: paths.vmTemplate,
            icon: (
              <SvgIcon fontSize="small">
                <Building04Icon />
              </SvgIcon>
            ),
          },
        ],
      },
    ],
    [t],
  )
}
