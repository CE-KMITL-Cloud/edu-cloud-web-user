import { Box } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { VmTemplateProvider } from 'contexts/vm-template-page-context'

import { Page } from 'types/page'

import { TemplateTable } from 'views/template-page/TemplateTable'

import { Header } from './Header'
import { Background, ScreenFlex, StyledPaper } from './styled'

export const TemplatePage: Page = withAuthGuard(() => {
  return (
    <VmTemplateProvider>
      <HeaderBar iconSrc="/static/icons/server-black.png">Template</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <TemplateTable />
        </StyledPaper>
      </Background>
    </VmTemplateProvider>
  )
})

TemplatePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
