import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

interface ConfirmationModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: () => void
  onClose: () => void
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  isLoading,
  title,
  id,
  onConfirm,
  onClose,
}) => {
  const handleConfirm = () => {
    onConfirm()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      // onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to perform this action on {id} ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
