import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'

export const DashboardPage: Page = withAuthGuard(() => {
  return (
    <>
      <HeaderBar iconSrc="/static/icons/info.svg">Dashboard</HeaderBar>
    </>
  )
})

DashboardPage.getLayout = (page) => <MainLayout>{page}</MainLayout>
