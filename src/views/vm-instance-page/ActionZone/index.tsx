import { ActionDropdownButton } from 'components/common/ActionDropdownButton'
import { Item } from 'components/common/DropdownButton'

import { ActionButtonStack } from './styled'

export const ActionZone = () => {
  const infoDropdownItems: Item[] = [
    {
      key: '1',
      label: 'start',
    },
    {
      key: '2',
      label: 'stop',
    },
    {
      key: '3',
      label: 'suspend',
    },
    {
      key: '4',
      label: 'resume',
    },
    {
      key: '5',
      label: 'reset'
    },
    {
      key: '6',
      label: 'shutdown'
    }
  ]

  const outDropdownItems: Item[] = [
    {
      key: '1',
      label: 'migrate live',
    },
    {
      key: '2',
      label: 'backup',
    },
    {
      key: '3',
      label: 'restore',
    },
  ]

  const deleteDropdownItems: Item[] = [
    {
      key: '1',
      label: 'destroy',
    },
  ]
  return (
    <ActionButtonStack>
      <ActionDropdownButton items={infoDropdownItems} type="info" textTransform="capitalize" />
      {/* <ActionDropdownButton items={outDropdownItems} type="out" textTransform="capitalize" /> */}
      <ActionDropdownButton items={deleteDropdownItems} type="delete" textTransform="capitalize" />
    </ActionButtonStack>
  )
}
