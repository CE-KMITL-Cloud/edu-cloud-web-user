import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { poolsApi } from 'api/backend/app/pool'

import { AlertModal } from 'components/common/AlertModal'

import { accountStore } from 'store/account-store'

import { usePoolContext } from 'contexts/pool-page-context'

import { HeaderPaper, Root } from './styled'

interface FormData {
  code: string
  name: string
  owner: string
}

export const Header = observer(() => {
  const { handlePoolsGet } = usePoolContext()

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({ code: '', name: '', owner: '' })
  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [warning, setWarning] = useState<string | null>(null)

  const handleCreatePool = async () => {
    if (!accountStore.name || !accountStore.role) return
    try {
      if (accountStore.role !== 'admin') formData.owner = accountStore.name
      const response = await poolsApi.CreatePool(accountStore.name, formData.owner, formData.code, formData.name)
      if (!response.success) {
        console.log(response)
        setWarning('Failed creating pool.')
        setAlertModalOpen(true)
      } else {
        setWarning(null)
        setAlertModalOpen(false)
        handleClose()
        handlePoolsGet(accountStore.name, accountStore.name)
      }
    } catch (error) {
      setWarning('Failed creating pool.')
      setAlertModalOpen(true)
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Call your API with the formData.text value
    console.log(`Create Pool with the code: ${formData.code}, name: ${formData.name}`)
    await handleCreatePool()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFormData({ code: '', name: '', owner: '' })
    setWarning(null)
  }

  return (
    <Root>
      <HeaderPaper>
        <Typography variant="h6" fontWeight={700}>
          My Pools
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          Create Pool
        </Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              padding: 4,
              m: 'auto',
              mt: 10,
              mb: 10,
              maxWidth: '25%',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" fontWeight={700}>
                Create Pool
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Course code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Course name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  />
                </Grid>
                {accountStore.role === 'admin' && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Enter Course owner"
                      name="owner"
                      value={formData.owner}
                      onChange={handleChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                )}
                <AlertModal
                  open={alertModalOpen}
                  title="Error"
                  message={warning}
                  onClose={() => setAlertModalOpen(false)}
                />
                <Grid item xs={12}>
                  <Grid container justifyContent={'flex-end'}>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                      Create
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </HeaderPaper>
    </Root>
  )
})
