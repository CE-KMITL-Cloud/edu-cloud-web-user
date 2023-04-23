import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { poolsApi } from 'api/backend/service/pool'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'
import { Pool } from 'types/pool'

import { Header } from 'views/user-management-page/Header'
import { PoolTable } from 'views/user-management-page/UserTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

const usePoolsStore = () => {
  const [state, setState] = useState<Pool[]>([])
  const router = useRouter()
  const handlePoolsGet = useCallback(async () => {
    try {
      // get username who is request
      const response = await poolsApi.fetchOwnerPools('teacher1', 'teacher1')
      setState(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    handlePoolsGet()
    const intervalId = setInterval(() => {
      handlePoolsGet()
    }, 60000) // Fetches data every 3 seconds

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [router.asPath])

  useEffect(() => {
    console.log(state)
  }, [state])

  return {
    pools: state,
  }
}

export const UserManagementPage: Page = withAuthGuard(() => {
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null)
  const { pools } = usePoolsStore()
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">User Management</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <PoolTable pools={pools} onPoolSelect={setSelectedPool} />
        </StyledPaper>
      </Background>
    </>
  )
})

UserManagementPage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)