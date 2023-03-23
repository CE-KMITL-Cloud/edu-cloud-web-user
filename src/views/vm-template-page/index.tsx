'auth'

import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { MainLayout } from 'layouts/MainLayout'

import { Page } from 'types/page'

export const VmTemplatePage: Page = () => {
  const r = useRouter()
  useEffect(() => {
    r.push('/')
  }, [])

  return <Box>hello</Box>
}

VmTemplatePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
