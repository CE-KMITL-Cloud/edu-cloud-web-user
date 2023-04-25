import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'

import { poolsApi } from 'api/backend/app/pool'

import { accountStore } from 'store/account-store'

import { usePoolContext } from 'contexts/pool-page-context'

import { PoolBasicDetails } from '../PoolBasicDetail'
import { PoolMemberTable } from '../PoolMemberTable'
import { PoolVmTable } from '../PoolVmTable'

interface PoolDetailModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: (values: string[] | null) => void
  onClose: () => void
}

export const PoolDetailModal: React.FC<PoolDetailModalProps> = ({ isOpen, onClose }) => {
  const { selectedPool, handlePoolsGet } = usePoolContext()

  const [editMode, setEditMode] = useState(false)
  const [editInstancesMode, setEditInstancesMode] = useState(false)

  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [selectedInstances, setSelectedInstances] = useState<string[]>([])

  const handleSelectedChange = (selectedMembers: string[]) => {
    setSelectedMembers(selectedMembers)
  }

  const handleSelectedInstancesChange = (selectedInstances: string[]) => {
    setSelectedInstances(selectedInstances)
  }

  const handleCancel = () => {
    onClose()
    setEditMode(false)
    setEditInstancesMode(false)
  }

  const handleSave = async (selectedMembers: string[], selectedInstances: string[]) => {
    if (!accountStore.email) return
    if (selectedPool) {
      try {
        // Update the members state
        const res = await poolsApi.AddMembersPool(
          accountStore.email,
          selectedPool.Owner,
          selectedPool.Code,
          selectedMembers,
        )
        console.log(res)
        // Update the instances state
        const response = await poolsApi.EditInstancePool(
          accountStore.email,
          selectedPool.Owner,
          selectedPool.Code,
          selectedInstances,
        )
        console.log(response)
        handlePoolsGet(accountStore.email, accountStore.email)
      } catch (error) {
        console.error('Error updating pool:', error)
      }
    }
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
    setEditInstancesMode(!editInstancesMode)
    if (editMode && editInstancesMode) {
      // Call onSave from prop, passing the selected members
      handleSave(selectedMembers, selectedInstances)
      handleCancel()
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={accountStore.role !== 'student' ? 'md' : 'sm'} // Set modal max width to large
      fullWidth={true} // Make it take the full available width
      PaperProps={{ style: { backgroundColor: '#F2F3F5' } }}
    >
      <DialogContent>
        {accountStore.role !== 'student' ? (
          <Grid container spacing={2}>
            {/* Left-hand side card */}
            <Grid item xs={12} md={5}>
              <PoolBasicDetails />
            </Grid>
            {/* Right-hand side content */}
            <Grid item xs={12} md={7}>
              <DialogContentText id="alert-dialog-description">
                <PoolMemberTable editMode={editMode} onSelectedChange={handleSelectedChange} />
                <br></br>
                <PoolVmTable editMode={editInstancesMode} onSelectedChange={handleSelectedInstancesChange} />
              </DialogContentText>
            </Grid>
          </Grid>
        ) : (
          <PoolBasicDetails />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        {accountStore.role !== 'student' && (
          <Button onClick={handleEditMode}>{editMode && editInstancesMode ? 'Save' : 'Edit'}</Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
