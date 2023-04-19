import { Box } from '@mui/material'
import { useRouter } from 'next/router'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Page } from 'types/page'

import { Header } from 'views/vm-console-page/Header'

import { Background, ScreenFlex, StyledPaper } from './styled'

export const VmConsolePage: Page = withAuthGuard(() => {
  const router = useRouter()
  const url = router.query.url as string
  console.log(url)
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">VM Console</HeaderBar>
      <Background>
        <StyledPaper>
          {/* <Box pb={4}>
            <Header />
          </Box> */}
          <iframe
            src={url}
            title="My iframe"
            width="900"
            height="600"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </StyledPaper>
      </Background>
    </>
  )
})

VmConsolePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
