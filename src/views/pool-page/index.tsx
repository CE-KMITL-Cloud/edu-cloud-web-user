import { Box } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { PoolProvider } from 'contexts/pool-page-context'

import { Page } from 'types/page'

import { Header } from 'views/pool-page/Header'
import { PoolTable } from 'views/pool-page/PoolTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

export const PoolPage: Page = () => {
  return (
    <PoolProvider>
      <HeaderBar iconSrc="/static/icons/server-black.png">Resource Pool</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <PoolTable />
        </StyledPaper>
      </Background>
    </PoolProvider>
  )
}

PoolPage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
