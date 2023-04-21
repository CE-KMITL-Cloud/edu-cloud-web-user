import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material'
import React from 'react'

import { Pool } from 'types/pool'

import { PoolBasicDetails } from '../PoolBasicDetail'
import { PoolMemberTable } from '../PoolMemberTable'

interface PoolDetailModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: (values: string[] | null) => void
  onClose: () => void
  pool: Pool | null
}

export const PoolDetailModal: React.FC<PoolDetailModalProps> = ({ isOpen, onClose, pool }) => {
  const handleCancel = () => {
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg" // Set modal max width to large
      fullWidth={true} // Make it take the full available width
      PaperProps={{ style: { backgroundColor: '#F2F3F5' } }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          {/* Left-hand side card */}
          <Grid item xs={12} md={3}>
            <PoolBasicDetails pool={pool} />
          </Grid>
          {/* Right-hand side content */}
          <Grid item xs={12} md={9}>
            <DialogContentText id="alert-dialog-description">
              <PoolMemberTable pool={pool} />
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
