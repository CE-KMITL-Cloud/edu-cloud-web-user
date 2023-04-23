import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

import { clusterApi } from 'api/backend/app/cluster'

interface CloneInstanceModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: (values: string[] | null) => void
  onClose: () => void
  initialValues: string[]
}

export const CloneInstanceModal: React.FC<CloneInstanceModalProps> = ({
  isOpen,
  isLoading,
  title,
  id,
  onConfirm,
  onClose,
  initialValues,
}) => {
  const defaultValues = initialValues.map((value) => value ?? '')
  const [values, setValues] = useState<string[]>(defaultValues)
  const labels = ['Hostname', '', "Cloud-init's username", "Cloud-init's password"]
  const [options, setOptions] = useState<string[]>([])

  const handleInputChange = useCallback(
    (index: number, value: string) => {
      const newValues = [...values]
      newValues[index] = value
      setValues(newValues)
    },
    [values],
  )

  useEffect(() => {
    clusterApi
      .fetchStorages()
      .then((response) => {
        setOptions(response)
      })
      .catch((error) => {
        console.error('Error fetching options:', error)
      })
  }, [])

  useEffect(() => {
    if (options?.length > 0) {
      handleInputChange(1, options[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  const handleConfirm = () => {
    onConfirm(values)
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
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to perform this action on {id}?
          </DialogContentText>
          <br></br>
          {values?.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              {index === 1 ? (
                <Select
                  value={values[1]}
                  onChange={(e) => handleInputChange(1, e.target.value as string)}
                  fullWidth
                  style={{ margin: '0 8px' }}
                >
                  {options?.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                <TextField
                  type="text"
                  label={labels[index]}
                  value={item}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  fullWidth
                  inputProps={{ maxLength: 10 }}
                  style={{ margin: '0 8px' }}
                />
              )}
            </div>
          ))}
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
}
