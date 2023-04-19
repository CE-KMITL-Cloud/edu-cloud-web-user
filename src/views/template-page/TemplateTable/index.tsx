import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { instancesApi } from 'api/backend/service/instance'

import { CoreSvg } from 'components/core/CoreSvg'

import { AlertModal } from 'components/common/AlertModal'
import { ConfirmationModal } from 'components/common/ConfirmationModal'

import { paths } from 'routes/paths'

import { Instance, InstanceSpec } from 'types/instance'

import { CloneInstanceModal } from 'views/template-page/CloneInstanceModal'

import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

const RenderVmSpec = ({ spec }: { spec: InstanceSpec }) => {
  return (
    <>
      {spec.maxcpu} vCPU, RAM {spec.maxmem / 1073741824} GB <br /> Disk size : {spec.maxdisk / 1073741824} GB
    </>
  )
}

interface TemplateTableProps {
  templates?: Instance[]
  onTemplateSelect: (instance: Instance | null) => void
}

export const TemplateTable: FC<TemplateTableProps> = (props) => {
  const { templates = [], onTemplateSelect } = props
  const [selectedTemplate, setSelectedTemplate] = useState<Instance | null>(null)

  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)
  const [navigate, setNavigate] = useState(false)
  const router = useRouter()

  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenConfirmModal = () => {
    setConfirmModalOpen(true)
  }

  const handleOpenFormModal = () => {
    setFormModalOpen(true)
  }

  const handleConfirmClone = async (submittedValues: string[] | null) => {
    if (selectedTemplate && submittedValues !== null) {
      setIsLoading(true)
      try {
        const response = await instancesApi.cloneInstance(
          'teacher1',
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
  }, [navigate])

  const handleConfirmDestroy = async () => {
    if (selectedTemplate !== null) {
      setIsLoading(true)
      try {
        const response = await instancesApi.destroyInstance('admin', selectedTemplate.node, selectedTemplate.vmid)
        if (!response.success) {
          console.log(response)
          setWarning('Failed destroying VM.')
          setAlertModalOpen(true)
          setNavigate(false)
        } else {
          setWarning(null)
          setNavigate(true)
        }
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        console.error('Error:', error)
        setWarning('Failed destroying VM.')
        setAlertModalOpen(true)
        setNavigate(false)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setConfirmModalOpen(false)
      }
    }
  }

  const handleButtonClick = (type: 'confirm' | 'form') => {
    if (type === 'confirm') {
      handleOpenConfirmModal()
    } else if (type === 'form') {
      handleOpenFormModal()
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
        {templates.map((template: Instance) => {
          console.log('template :', template)
          return (
            <StyledTableRow
              key={template.id}
              onClick={() => {
                onTemplateSelect(template)
                setSelectedTemplate(template)
                console.log('Selected instance:', template)
              }}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedTemplate?.vmid === template.vmid ? '#f3f3f3' : '',
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
                    <CoreSvg src="/static/icons/console.svg" width={24} />
                  </Center>
                </IconButton>
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
}

TemplateTable.propTypes = {
  templates: PropTypes.array,
}
