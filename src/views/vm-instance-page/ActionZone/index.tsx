import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useCallback, useMemo, useState } from 'react'

import { instancesApi } from 'api/backend/service/instance'
import { powerApi } from 'api/backend/service/power'

import { ActionDropdownButton } from 'components/common/ActionDropdownButton'
import { ConfirmationModal } from 'components/common/ConfirmationModal'
import { Item } from 'components/common/DropdownButton'
import { EditInstanceModal } from 'components/common/EditInstanceModal'

import { Instance, InstancePropTypes } from 'types/instance'

import { ActionButtonStack } from './styled'

interface ActionZoneProps {
  selectedInstance: Instance | null
}

export const ActionZone: FC<ActionZoneProps> = (props) => {
  const { selectedInstance } = props

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [selectedAction, setSelectedAction] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const openModalWithAction = (action: string) => {
    setModalTitle(`Confirm ${action}`)
    setSelectedAction(action)
    setIsModalOpen(true)
  }

  const onClickItemHandler = useCallback(
    (action: string) => {
      openModalWithAction(action)
    },
    [openModalWithAction],
  )

  const calculatedInitialValues = useMemo(() => {
    return [
      selectedInstance?.maxcpu ?? 0,
      (selectedInstance?.maxmem ?? 0) / 1048576,
      (selectedInstance?.maxdisk ?? 0) / 1073741824,
    ]
  }, [selectedInstance])

  const handleConfirmEdit = async (submittedValues: number[] | null) => {
    if (selectedInstance && submittedValues !== null) {
      // Set isLoading state to true before starting the API call
      setIsLoading(true)
      try {
        await instancesApi.editInstance(
          'admin',
          selectedInstance.node,
          selectedInstance.vmid,
          submittedValues[0],
          submittedValues[1],
          submittedValues[2],
        )
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        console.error('Error:', error)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setIsModalOpen(false)
      }
    }
  }

  const confirmAction = async () => {
    if (selectedInstance) {
      // Set isLoading state to true before starting the API call
      setIsLoading(true)

      const actionMapping: Record<string, () => Promise<any>> = {
        start: () => powerApi.startInstance('admin', selectedInstance.node, selectedInstance.vmid),
        stop: () => powerApi.stopInstance('admin', selectedInstance.node, selectedInstance.vmid),
        suspend: () => powerApi.suspendInstance('admin', selectedInstance.node, selectedInstance.vmid),
        resume: () => powerApi.resumeInstance('admin', selectedInstance.node, selectedInstance.vmid),
        reset: () => powerApi.resetInstance('admin', selectedInstance.node, selectedInstance.vmid),
        shutdown: () => powerApi.shutdownInstance('admin', selectedInstance.node, selectedInstance.vmid),
        template: () => instancesApi.createTemplate('admin', selectedInstance.node, selectedInstance.vmid),
        destroy: () => instancesApi.destroyInstance('admin', selectedInstance.node, selectedInstance.vmid),
      }

      try {
        await actionMapping[selectedAction]?.()
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        console.error('Error:', error)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setIsModalOpen(false)
      }
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAction('')
  }

  const infoDropdownItems: Item[] = [
    {
      key: 'start',
      label: 'start',
    },
    {
      key: 'stop',
      label: 'stop',
    },
    {
      key: 'suspend',
      label: 'suspend',
    },
    {
      key: 'resume',
      label: 'resume',
    },
    {
      key: 'reset',
      label: 'reset',
    },
    {
      key: 'shutdown',
      label: 'shutdown',
    },
  ]

  const outDropdownItems: Item[] = [
    {
      key: 'edit',
      label: 'edit',
    },
    {
      key: 'template',
      label: 'template',
    },
  ]

  const deleteDropdownItems: Item[] = [
    {
      key: 'destroy',
      label: 'destroy',
    },
  ]
  return (
    <ActionButtonStack>
      <ActionDropdownButton
        items={infoDropdownItems}
        type="info"
        textTransform="capitalize"
        selectedInstance={selectedInstance}
        onClickItem={onClickItemHandler}
      />
      <ActionDropdownButton
        items={outDropdownItems}
        type="out"
        textTransform="capitalize"
        selectedInstance={selectedInstance}
        onClickItem={onClickItemHandler}
      />
      <ActionDropdownButton
        items={deleteDropdownItems}
        type="delete"
        textTransform="capitalize"
        selectedInstance={selectedInstance}
        onClickItem={onClickItemHandler}
      />
      {selectedAction == 'edit' ? (
        <EditInstanceModal
          isOpen={isModalOpen}
          isLoading={isLoading}
          title={modalTitle}
          onConfirm={handleConfirmEdit}
          onClose={closeModal}
          id={selectedInstance?.id}
          initialValues={calculatedInitialValues}
        />
      ) : (
        <ConfirmationModal
          isOpen={isModalOpen}
          isLoading={isLoading}
          title={modalTitle}
          onConfirm={confirmAction}
          onClose={closeModal}
          id={selectedInstance?.id}
        />
      )}
    </ActionButtonStack>
  )
}

ActionZone.propTypes = {
  selectedInstance: PropTypes.oneOfType([InstancePropTypes, PropTypes.oneOf([null])]),
}
