import PropTypes from 'prop-types'
import type { FC } from 'react'

import { ActionDropdownButton } from 'components/common/ActionDropdownButton'
import { Item } from 'components/common/DropdownButton'

import { Instance, InstancePropTypes } from 'types/instance'

import { ActionButtonStack } from './styled'

interface ActionZoneProps {
  selectedInstance: Instance | null
}

export const ActionZone: FC<ActionZoneProps> = (props) => {
  const { selectedInstance } = props
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
      label: 'reset',
    },
    {
      key: '6',
      label: 'shutdown',
    },
  ]

  const outDropdownItems: Item[] = [
    {
      key: '1',
      label: 'template',
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
      <ActionDropdownButton items={outDropdownItems} type="out" textTransform="capitalize" />
      <ActionDropdownButton items={deleteDropdownItems} type="delete" textTransform="capitalize" />
    </ActionButtonStack>
  )
}

ActionZone.propTypes = {
  selectedInstance: PropTypes.oneOfType([InstancePropTypes, PropTypes.oneOf([null])]),
}
