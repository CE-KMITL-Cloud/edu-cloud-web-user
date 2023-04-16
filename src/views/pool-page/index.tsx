import { Box } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import { poolsApi } from 'api/backend/service/pool'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'
import { Pool } from 'types/pool'

import { PoolTable } from 'views/pool-page/PoolTable'
import { Header } from 'views/pool-page/Header'

import { Background, ScreenFlex, StyledPaper } from './styled'

const usePoolsStore = () => {
  const [state, setState] = useState<Pool[]>([])
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
    }, 3000) // Fetches data every 3 seconds

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  return {
    pools: state,
  }
}

export const PoolPage: Page = withAuthGuard(() => {
  const { pools } = usePoolsStore()
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Resource Pool</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <PoolTable pools={pools} />
        </StyledPaper>
      </Background>
    </>
  )
})

PoolPage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
