import { useTheme } from '@mui/material'
import { useMemo } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { DropdownButton, DropdownButtonProps } from 'components/common/DropdownButton'

interface ActionDropdownButton extends Pick<DropdownButtonProps, 'items' | 'textTransform'> {
  readonly type: 'info' | 'out' | 'delete'
}

const mappingImage: Readonly<Record<ActionDropdownButton['type'], string>> = {
  info: 'information.svg',
  delete: 'trash.svg',
  out: 'out.svg',
} as const

export const ActionDropdownButton = ({ items, textTransform, type }: ActionDropdownButton) => {
  const theme = useTheme()

  const mappingBackground = useMemo(
    () => ({
      info: theme.palette.info.main,
      delete: theme.palette.error.main,
      out: theme.palette.info.main,
    }),
    [theme],
  )

  return (
    <DropdownButton items={items} backgroundColor={mappingBackground[type]} textTransform={textTransform}>
      <CoreSvg src={`/static/icons/action-dropdown-button/${mappingImage[type]}`} width={16} />
    </DropdownButton>
  )
}
