import { Box } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { mockVmInstances } from 'mock/vm-instance'

import { Page } from 'types/page'

import { Header } from 'views/vm-instance-page/Header'
import { InstanceTable } from 'views/vm-instance-page/InstanceTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

export const VmInstancePage: Page = withAuthGuard(() => {
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">VM Instance</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <InstanceTable instances={mockVmInstances} />
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
