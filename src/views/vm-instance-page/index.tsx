import { Box } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'
import { StretchContainer } from 'components/common/StretchContainer'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { VmInstanceProvider } from 'contexts/vm-instance-page-context'

import { Page } from 'types/page'

import { Header } from 'views/vm-instance-page/Header'
import { InstanceTable } from 'views/vm-instance-page/InstanceTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

export const VmInstancePage: Page = withAuthGuard(() => {
  return (
    <VmInstanceProvider>
      <HeaderBar iconSrc="/static/icons/server-black.png">VM Instance</HeaderBar>
      <Background>
        <StretchContainer>
          <StyledPaper>
            <Box pb={4}>
              <Header />
            </Box>
            <InstanceTable />
          </StyledPaper>
        </StretchContainer>
      </Background>
    </VmInstanceProvider>
  )
})

VmInstancePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
