import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'

interface EditInstanceModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  id?: string
  onConfirm: (values: number[] | null) => void
  onClose: () => void
  initialValues: Array<number | undefined>
}

export const EditInstanceModal: React.FC<EditInstanceModalProps> = ({
  isOpen,
  isLoading,
  title,
  id,
  onConfirm,
  onClose,
  initialValues,
}) => {
  const defaultValues = initialValues.map((value) => value ?? 0)
  const [values, setValues] = useState<number[]>(defaultValues)
  const labels = ["vCPU (core)", "Memory (MB)", "Add disk size (GB)"];

  const handleConfirm = () => {
    onConfirm(values)
  }

  const handleCancel = () => {
    onClose()
  }

  const handleInputChange = (index: number, value: string) => {
    if ((index !== 2 && /^\d*$/.test(value)) || (index === 2 && /^\d+$/.test(value))) {
      const newValues = [...values]
      newValues[index] = parseInt(value, 10) || 0
      setValues(newValues)
    }
  }

  const handleIncrement = (index: number) => {
    const newValues = [...values]
    newValues[index] += 1
    setValues(newValues)
  }

  const handleDecrement = (index: number) => {
    const initialValue = initialValues[index] ?? 0
    if (values[index] > initialValue) {
      const newValues = [...values]
      newValues[index] -= 1
      setValues(newValues)
    }
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
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to perform this action on {id}?
          </DialogContentText>
          <br></br>
          {values.map((value, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              {index !== 2 && (
                <Button onClick={() => handleDecrement(index)} disabled={value === initialValues[index]}>
                  -1
                </Button>
              )}
              <TextField
                type="text"
                label={labels[index]}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                fullWidth
                inputProps={{ maxLength: 10 }}
                style={{ margin: '0 8px' }}
              />
              {index !== 2 && <Button onClick={() => handleIncrement(index)}>+1</Button>}
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
