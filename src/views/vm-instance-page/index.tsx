'auth'

import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { Page } from 'types/page'

export const VmInstancePage: Page = () => {
  const r = useRouter()
  useEffect(() => {
    r.push('/')
  }, [])

  return (
    <div>
      <HeaderBar iconSrc="/static/icons/info.svg">VM Instance</HeaderBar>
      <Box p={4} sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}>
        <Paper sx={{ p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body1">My instance</Typography>
            <Button variant="contained">create instance</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  )
}

VmInstancePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
