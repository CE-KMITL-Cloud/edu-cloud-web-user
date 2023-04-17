import { MainLayout } from 'layouts/MainLayout'

import VMConsole from 'components/common/Console/VMConsole'
import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'

export const VMConsolePage: Page = withAuthGuard(() => {
  const apiUrl = '/api/get-vnc-ticket' // Replace this with the actual API endpoint

  return (
    <>
      <HeaderBar iconSrc="/static/icons/console.svg">VM Console</HeaderBar>
      <VMConsole apiUrl={apiUrl} />
    </>
  )
})

VMConsolePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
