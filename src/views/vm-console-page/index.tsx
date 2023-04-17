import { MainLayout } from 'layouts/MainLayout'

import VMConsole from 'components/common/Console/VMConsole'
import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'

export const VMConsolePage: Page = withAuthGuard(() => {
  // Mock data for testing
  const mockData = {
    url: 'wss://edu.ce.kmitl.cloud/api2/json/nodes/work-3/qemu/100/vncwebsocket',
    ticket:
      'PVEVNC:643D360D::d0UyG/TdIWJSOM1UAHrPbnCwKip6SWRNpt1f4cOgpnJvP9KrY2Y5J+wzIPDM/sCnHAdYufpk2Il7i5kyYUmujw52vxHLuAxC89TiS4soWPC7c5XcHFQ11P9nacwpH1NEzlxEIb9FpVc6vH0t9Lpf5ceYLil1XMZB254TrvMyUk18IbaNOhtqUHtmT2Wxy+UwcNPlDA7tiAc3uqjk1BCE3cPonf8BMzYKNA7tszFAksWdTzcFYnYowrbvdnDEOUriM0MyvFL57JEbQBq1kvPQuXiBZ1J9mkLqhXphXOH6blApv1U+Ndtuq4y3vlOOe4WRUaVvSdP1Zykt6T0etflviw==',
  }
  const apiUrl = JSON.stringify(mockData)

  return (
    <>
      <HeaderBar iconSrc="/static/icons/console.svg">VM Console</HeaderBar>
      <VMConsole apiUrl={apiUrl} />
    </>
  )
})

VMConsolePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
