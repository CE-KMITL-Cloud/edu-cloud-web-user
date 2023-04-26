import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'

import { poolsApi } from 'api/backend/app/pool'

import { accountStore } from 'store/account-store'

import { Pool } from 'types/pool'

interface AddToPoolProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: (values: Pool | null) => void
  onClose: () => void
  sender: string | undefined
}

export const AddToPoolModal: React.FC<AddToPoolProps> = observer(
  ({ isOpen, isLoading, title, id, onConfirm, onClose, sender }) => {
    const [options, setOptions] = useState<Pool[]>([])
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    useEffect(() => {
      if (!sender || accountStore.role === 'student') return
      poolsApi
        .fetchOwnerPools(sender, sender)
        .then((response) => {
          setOptions(response)
        })
        .catch((error) => {
          console.error('Error fetching options:', error)
        })
    }, [sender])

    useEffect(() => {
      if (options.length > 0) {
        setSelectedIndex(0)
      }
    }, [options])

    const handleInputChange = (event: SelectChangeEvent<number>) => {
      const index = event.target.value as number
      setSelectedIndex(index)
    }

    const handleConfirm = () => {
      const selectedPool = options[selectedIndex as number]
      onConfirm(selectedPool)
      console.log(selectedPool)
    }

    const handleCancel = () => {
      onClose()
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      handleConfirm()
    }

    return (
      <Dialog
        open={isOpen}
        // onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContentText id="alert-dialog-description">Are you sure you want to add {id} to</DialogContentText>
            <br></br>
            <Select
              value={selectedIndex === null ? '' : selectedIndex}
              onChange={handleInputChange}
              fullWidth
              style={{ margin: '0 8px' }}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={index}>
                  {option.Code} {option.Name}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" autoFocus disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Confirm'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  },
)
