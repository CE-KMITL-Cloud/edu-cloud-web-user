import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useState } from 'react'

import { poolsApi } from 'api/backend/app/pool'

import { AlertModal } from 'components/common/AlertModal'
import { ConfirmationModal } from 'components/common/ConfirmationModal'
import { SeverityPill } from 'components/common/ServerityPill'
import { SeverityPillColor } from 'components/common/ServerityPill/styled'

import { accountStore } from 'store/account-store'

import { usePoolContext } from 'contexts/pool-page-context'

import { Pool } from 'types/pool'

import { PoolDetailModal } from '../PoolDetailModal'
import { TableTextCell } from './TableCell'
import { Center, StyledTableHead, StyledTableRow } from './styled'

export const PoolTable = observer(() => {
  const { pools, selectedPool, setSelectedPool, handlePoolsGet } = usePoolContext()

  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)

  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [detailModalOpen, setDetailModalOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleOpenConfirmModal = () => {
    setConfirmModalOpen(true)
  }

  const handleOpenDetailModal = async (pool: Pool) => {
    setDetailModalOpen(true)
    console.log('Clicked row data:', pool)
  }

  const handleConfirmDestroy = async () => {
    if (!accountStore.email) return
    if (selectedPool !== null) {
      setIsLoading(true)
      try {
        const response = await poolsApi.DeletePool(accountStore.email, selectedPool.Owner, selectedPool.Code)
        if (!response.success) {
          console.log(response)
          setWarning('Failed destroying pool.')
          setAlertModalOpen(true)
        } else {
          setWarning(null)
          setAlertModalOpen(false)
          handlePoolsGet(accountStore.email, accountStore.email)
        }
      } catch (error) {
        // Handle the error here, e.g., showing an error message or logging the error
        console.error('Error:', error)
        setWarning('Failed destroying pool.')
        setAlertModalOpen(true)
      } finally {
        // After the API call, set the isLoading state to false and close the modal
        setIsLoading(false)
        setConfirmModalOpen(false)
        setWarning(null)
        setAlertModalOpen(false)
        handlePoolsGet(accountStore.email, accountStore.email)
      }
    }
  }

  useEffect(() => {
    console.log('selected pool :', selectedPool)
  }, [selectedPool])

  return (
    <Table>
      <StyledTableHead>
        <TableRow>
          <TableTextCell type="header">Course Code</TableTextCell>
          <TableTextCell type="header">Course Name</TableTextCell>
          <TableTextCell type="header">Course Owner</TableTextCell>
          <TableTextCell type="header">Status</TableTextCell>
          <TableTextCell type="header">Actions</TableTextCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {pools?.map((pool: Pool) => {
          const pillColor: SeverityPillColor = pool.Status ? 'success' : 'error'
          const pillText: string = pool.Status ? 'active' : 'inactive'
          return (
            <StyledTableRow
              key={pool.ID}
              onClick={() => {
                setSelectedPool(pool)
              }}
            >
              <TableCell>{pool.Code}</TableCell>
              <TableTextCell>{pool.Name}</TableTextCell>
              <TableTextCell>{pool.Owner}</TableTextCell>
              <TableCell>
                <SeverityPill color={pillColor} text={pillText} minWidth={80} />
              </TableCell>
              <TableCell>
                {accountStore.role !== 'student' && (
                  <IconButton onClick={handleOpenConfirmModal}>
                    <Center>
                      <DeleteOutlineIcon />
                    </Center>
                  </IconButton>
                )}
                <IconButton
                  onClick={() => {
                    handleOpenDetailModal(pool)
                  }}
                >
                  <Center>
                    <ChevronRightIcon />
                  </Center>
                </IconButton>
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
        id={'course name : ' + selectedPool?.Name}
        onConfirm={handleConfirmDestroy}
        onClose={() => setConfirmModalOpen(false)}
      />
      <PoolDetailModal
        isOpen={detailModalOpen}
        isLoading={isLoading}
        title="Pool Detail"
        id={'course name : ' + selectedPool?.Name}
        onConfirm={() => {}}
        onClose={() => {
          setDetailModalOpen(false)
        }}
      />
    </Table>
  )
})
