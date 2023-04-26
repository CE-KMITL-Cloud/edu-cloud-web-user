import { Box } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { UserManagementProvider } from 'contexts/user-management-page-context'

import { Page } from 'types/page'

import { Header } from 'views/user-management-page/Header'
import { UserTable } from 'views/user-management-page/UserTable'

import { Background, ScreenFlex, StyledPaper } from './styled'

export const UserManagementPage: Page = () => {
  return (
    <UserManagementProvider>
      <HeaderBar iconSrc="/static/icons/server-black.png">User Management</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <UserTable />
        </StyledPaper>
      </Background>
    </UserManagementProvider>
  )
}

UserManagementPage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
