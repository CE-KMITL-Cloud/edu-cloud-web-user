import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { instancesApi } from 'api/backend/app/instance'
import { poolsApi } from 'api/backend/app/pool'

import { CoreSvg } from 'components/core/CoreSvg'

import { AlertModal } from 'components/common/AlertModal'
import { ConfirmationModal } from 'components/common/ConfirmationModal'

import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

import { useVmTemplateContext } from 'contexts/vm-template-page-context'

import { Instance, InstanceSpec } from 'types/instance'
import { Pool } from 'types/pool'

import { CloneInstanceModal } from 'views/template-page/CloneInstanceModal'

import { AddToPoolModal } from '../AddToPoolModal'
import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

export const TemplateTable = observer(() => {
  const { templates, selectedTemplate, setSelectedTemplate, handleTemplatesGet } = useVmTemplateContext()

  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)
  const [navigate, setNavigate] = useState(false)
  const router = useRouter()

  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [formAddModalOpen, setFormAddModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenConfirmModal = () => {
    setConfirmModalOpen(true)
  }

  const handleOpenFormModal = () => {
    setFormModalOpen(true)
  }

  const handleOpenFormAddModal = () => {
    setFormAddModalOpen(true)
  }

  const RenderVmSpec = ({ spec }: { spec: InstanceSpec }) => {
    return (
      <>
        {spec.maxcpu} vCPU, RAM {spec.maxmem / 1073741824} GB <br /> Disk size : {spec.maxdisk / 1073741824} GB
      </>
    )
  }

  const handleConfirmClone = async (submittedValues: string[] | null) => {
    if (!accountStore.name) return

    if (selectedTemplate && submittedValues !== null) {
      setIsLoading(true)
      try {
        const response = await instancesApi.cloneInstance(
          accountStore.name,
          selectedTemplate.node,
          selectedTemplate.vmid,
          submittedValues[0],
          submittedValues[1],
          submittedValues[2],
          submittedValues[3],
        )
        if (!response.success) {
          console.log(response)
          setWarning('Failed cloning VM.')
          setAlertModalOpen(true)
          setNavigate(false)
        } else {
          setWarning(null)
          setNavigate(true)
        }
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        setWarning('Failed cloning VM.')
        setAlertModalOpen(true)
        setNavigate(false)
        console.error('Error:', error)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setFormModalOpen(false)
      }
    }
  }

  useEffect(() => {
    if (navigate) {
      router.push(paths.vmInstance)
    }
  }, [navigate, router])

  const handleConfirmAddToPool = async (pool: Pool | null) => {
    if (!accountStore.name) return

    if (selectedTemplate && pool !== null) {
      setIsLoading(true)
      try {
        const response = await poolsApi.AddInstancePool(
          accountStore.name,
          accountStore.name,
          pool.Code,
          selectedTemplate.vmid,
        )
        if (!response.success) {
          console.log(response)
          setWarning('Failed add template to pool.')
          setAlertModalOpen(true)
        } else {
          setWarning(null)
        }
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        setWarning('Failed add template to pool.')
        setAlertModalOpen(true)
        console.error('Error:', error)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setFormAddModalOpen(false)
      }
    }
  }

  const handleConfirmDestroy = async () => {
    if (!accountStore.name) return

    if (selectedTemplate !== null) {
      setIsLoading(true)
      try {
        const response = await instancesApi.destroyInstance(
          accountStore.name,
          selectedTemplate.node,
          selectedTemplate.vmid,
        )
        if (!response.success) {
          console.log(response)
          setWarning('Failed destroying VM.')
          setAlertModalOpen(true)
        } else {
          setWarning(null)
          handleTemplatesGet(accountStore.name)
        }
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        console.error('Error:', error)
        setWarning('Failed destroying VM.')
        setAlertModalOpen(true)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
      }
    }
  }

  const handleButtonClick = (type: 'confirm' | 'form' | 'add') => {
    if (type === 'confirm') {
      handleOpenConfirmModal()
    } else if (type === 'form') {
      handleOpenFormModal()
    } else if (type === 'add') {
      handleOpenFormAddModal()
    }
  }

  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header"> </TableTextCell>
          <TableTextCell type="header">Name</TableTextCell>
          <TableTextCell type="header">Spec</TableTextCell>
          <TableTextCell type="header">VMID</TableTextCell>
          <TableTextCell type="header">Action</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {templates?.map((template: Instance) => {
          return (
            <StyledTableRow
              key={template.id}
              onClick={() => {
                setSelectedTemplate(template)
                console.log('Selected template:', template)
              }}
            >
              <TableCell>
                <Center>
                  <CoreSvg src="/static/icons/cloud-server.svg" width={30} />
                </Center>
              </TableCell>
              <TableCell>{template.name}</TableCell>
              <TableTextCell>
                <RenderVmSpec spec={{ maxcpu: template.maxcpu, maxmem: template.maxmem, maxdisk: template.maxdisk }} />
              </TableTextCell>
              <TableTextCell>{template.vmid}</TableTextCell>
              <TableCell>
                <IconButton onClick={() => handleButtonClick('form')}>
                  <Center>
                    <NoteAddIcon />
                  </Center>
                </IconButton>
                {![8000, 8001, 8002, 8003].includes(template.vmid) && (
                  <IconButton onClick={() => handleButtonClick('add')}>
                    <Center>
                      <GroupAddIcon />
                    </Center>
                  </IconButton>
                )}
                {![8000, 8001, 8002, 8003].includes(template.vmid) && (
                  <IconButton onClick={() => handleButtonClick('confirm')}>
                    <Center>
                      <DeleteOutlineIcon />
                    </Center>
                  </IconButton>
                )}
              </TableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
      <AlertModal open={alertModalOpen} title="Error" message={warning} onClose={() => setAlertModalOpen(false)} />
      <ConfirmationModal
        isOpen={confirmModalOpen}
        isLoading={isLoading}
        title="Confirm Destroy"
        id={selectedTemplate?.id}
        onConfirm={handleConfirmDestroy}
        onClose={() => setConfirmModalOpen(false)}
      />
      <AddToPoolModal
        isOpen={formAddModalOpen}
        isLoading={isLoading}
        title="Confirm add template to pool"
        id={selectedTemplate?.id}
        onConfirm={handleConfirmAddToPool}
        onClose={() => setFormAddModalOpen(false)}
        sender={accountStore.name}
      />
      <CloneInstanceModal
        isOpen={formModalOpen}
        isLoading={isLoading}
        title="Confirm Clone"
        id={selectedTemplate?.id}
        onConfirm={handleConfirmClone}
        onClose={() => setFormModalOpen(false)}
        initialValues={['clone-vm', 'ceph-vm', 'username', 'password']}
      />
    </Table>
  )
})
