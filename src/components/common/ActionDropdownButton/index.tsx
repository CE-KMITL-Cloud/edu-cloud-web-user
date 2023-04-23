import { useTheme } from '@mui/material'
import { useMemo } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { DropdownButton, DropdownButtonProps } from 'components/common/DropdownButton'
import { Item } from 'components/common/DropdownButton/index'

import { Instance } from 'types/instance'

interface ActionDropdownButton extends Pick<DropdownButtonProps, 'items' | 'textTransform'> {
  readonly type: 'info' | 'out' | 'delete'
  selectedInstance: Instance | null
  onClickItem: (action: string) => void
}

const mappingImage: Readonly<Record<ActionDropdownButton['type'], string>> = {
  info: 'information.svg',
  delete: 'trash.svg',
  out: 'out.svg',
} as const

export const ActionDropdownButton = ({
  items,
  textTransform,
  type,
  selectedInstance,
  onClickItem,
}: ActionDropdownButton) => {
  const theme = useTheme()

  const modifiedItems = useMemo(() => {
    return (
      items?.reduce<Item[]>((acc, item) => {
        if (selectedInstance !== null) {
          acc.push({ ...item, onClick: () => onClickItem(item.key) })
        }
        return acc
      }, []) ?? items
    )
  }, [items, onClickItem, selectedInstance])

  const mappingBackground = useMemo(
    () => ({
      info: theme.palette.info.main,
      delete: theme.palette.error.main,
      out: theme.palette.info.main,
    }),
    [theme],
  )

  return (
    <DropdownButton items={modifiedItems} backgroundColor={mappingBackground[type]} textTransform={textTransform}>
      <CoreSvg src={`/static/icons/action-dropdown-button/${mappingImage[type]}`} width={16} />
    </DropdownButton>
  )
}
