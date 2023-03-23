import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { Page } from 'types/page'

export const DashboardPage: Page = () => {
  return (
    <>
      <HeaderBar iconSrc="/static/icons/info.svg">Dashboard</HeaderBar>
    </>
  )
}

DashboardPage.getLayout = (page) => <MainLayout>{page}</MainLayout>
