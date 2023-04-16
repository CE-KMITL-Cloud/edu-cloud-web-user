import { Box } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import { accessApi } from 'api/backend/service/access'
import { instancesApi } from 'api/backend/service/instance'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Instance } from 'types/instance'
import { Page } from 'types/page'

import { Header } from 'views/vm-instance-page/Header'
import { InstanceTable } from 'views/vm-instance-page/InstanceTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

const useInstancesStore = () => {
  const [state, setState] = useState<Instance[]>([])
  const handleInstancesGet = useCallback(async () => {
    try {
      //////////////////////////////////////////////////////////////////////
      // ! mock ticket
      const ticket = await accessApi.fetchTicket('teacher2', 'teacher2')
      console.log(ticket)
      //////////////////////////////////////////////////////////////////////
      const response = await instancesApi.fetchInstances('teacher1')
      setState(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    handleInstancesGet()
    const intervalId = setInterval(() => {
      handleInstancesGet()
    }, 10000) // Fetches data every 3 seconds

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  return {
    instances: state,
  }
}

export const VmInstancePage: Page = withAuthGuard(() => {
  const [selectedInstance, setSelectedInstance] = useState<Instance | null>(null)
  const { instances } = useInstancesStore()
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">VM Instance</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header selectedInstance={selectedInstance} />
          </Box>
          <InstanceTable instances={instances} onInstanceSelect={setSelectedInstance} />
        </StyledPaper>
      </Background>
    </>
  )
})

VmInstancePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
