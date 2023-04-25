import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
} from '@mui/material'
import React from 'react'
import { useState } from 'react'

import { userApi } from 'api/backend/app/user'

import { accountStore } from 'store/account-store'

import { useUserManagementContext } from 'contexts/user-management-page-context'

import { UserLimit } from 'types'

import { UserBasicDetails } from '../UserBasicDetail'
import { UserLimitDetails } from '../UserLimitDetail'

interface UserDetailModalProps {
  isOpen: boolean
  title: string
  id?: string
  onConfirm: (values: string[] | null) => void
  onClose: () => void
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({ isOpen, onClose }) => {
  const { selectedUser } = useUserManagementContext()
  const [updatedUserLimits, setUpdatedUserLimits] = useState<UserLimit>()

  const handleCancel = () => {
    onClose()
  }

  const saveUserLimits = async () => {
    if (!accountStore.email || !updatedUserLimits) return
    console.log('update limit :', updatedUserLimits)
    if (selectedUser) {
      try {
        const response = await userApi.UpdateUserLimit('admin', selectedUser.Username, updatedUserLimits)
        console.log(response)
        handleCancel()
        // Update the members state
      } catch (error) {
        console.error('Error updating members:', error)
      }
    }
  }

  return (
    <Dialog
      open={isOpen}
      // onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm" // Set modal max width to large
      fullWidth={true} // Make it take the full available width
      PaperProps={{ style: { backgroundColor: '#F2F3F5' } }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          {/* Left-hand side card */}
          <Grid item xs={12} md={6}>
            <UserBasicDetails />
          </Grid>
          {/* Right-hand side content */}
          <Grid item xs={12} md={6}>
            <DialogContentText id="alert-dialog-description">
              <UserLimitDetails updateLimit={updatedUserLimits} setUpdateLimit={setUpdatedUserLimits} />
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Close
        </Button>
        <Button onClick={saveUserLimits}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}
