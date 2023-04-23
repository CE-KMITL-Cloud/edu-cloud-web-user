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
  const { selectedPool } = usePoolContext()
  const [editMode, setEditMode] = useState(false)
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])

  const handleSelectedChange = (selectedMembers: string[]) => {
    setSelectedMembers(selectedMembers)
  }

  const handleCancel = () => {
    onClose()
    setEditMode(false)
  }

  const handleSave = async (selectedMembers: string[]) => {
    if (!accountStore.name) return
    if (selectedPool) {
      try {
        const response = await poolsApi.AddMembersPool(
          accountStore.name,
          selectedPool.Owner,
          selectedPool.Code,
          selectedMembers, // Assuming your API takes the updated selected members as a parameter
        )
        console.log(response)
        // Update the members state
      } catch (error) {
        console.error('Error updating members:', error)
      }
    }
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
    if (editMode) {
      // Call onSave from prop, passing the selected members
      handleSave(selectedMembers)
      handleCancel()
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md" // Set modal max width to large
      fullWidth={true} // Make it take the full available width
      PaperProps={{ style: { backgroundColor: '#F2F3F5' } }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          {/* Left-hand side card */}
          <Grid item xs={12} md={3}>
            <PoolBasicDetails />
          </Grid>
          {/* Right-hand side content */}
          <Grid item xs={12} md={9}>
            <DialogContentText id="alert-dialog-description">
              <PoolMemberTable editMode={editMode} onSelectedChange={handleSelectedChange} />
              <br></br>
              <PoolVmTable />
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        {accountStore.role !== 'student' && (
          <Button onClick={handleEditMode}>{editMode ? 'Save' : 'Edit member'}</Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
