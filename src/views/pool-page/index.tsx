import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { poolsApi } from 'api/backend/service/pool'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'
import { Pool } from 'types/pool'

import { Header } from 'views/pool-page/Header'
import { PoolTable } from 'views/pool-page/PoolTable'

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

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return {
    pools: state,
  }
}

export const PoolPage: Page = withAuthGuard(() => {
  const [pools, setPools] = useState<Pool[]>([])
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null)
  const [childState, setChildState] = useState<boolean>(false)

  const handleChildState = (data: boolean) => {
    setChildState(data)
  }

  const handlePoolsGet = useCallback(async () => {
    try {
      // get username who is request
      const response = await poolsApi.fetchOwnerPools('teacher1', 'teacher1')
      setPools(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    if (childState) {
      handlePoolsGet()
      setChildState(false)
    }
    handlePoolsGet()
    const intervalId = setInterval(() => {
      handlePoolsGet()
    }, 60000) // Fetches data every 3 seconds

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [childState])

  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Resource Pool</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header updateParent={handleChildState} />
          </Box>
          <PoolTable
            pools={pools}
            onPoolSelect={setSelectedPool}
            selectedPool={selectedPool}
            updateParent={handleChildState}
          />
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
