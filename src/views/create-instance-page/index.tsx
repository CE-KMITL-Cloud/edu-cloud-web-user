import { Typography } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { Page } from 'types/page'

import { InstanceCard, Props } from './InstanceCard'
import { Background, ContentWrapper, ScreenFlex, StyledPaper } from './styled'

const mock: Props[] = [
  {
    header: 'bwegvikergbli',
    children: 'elngegr',
  },
  {
    header: 'awegaewg',
    children: 'elngegr',
  },
  {
    header: 'htrthaerfh',
    children: 'elngegr',
  },
  {
    header: 'dgerhtrj',
    children: 'elngegr',
  },
  {
    header: 'FSEGwegerh',
    children: 'elngegr',
  },
  {
    header: 'sjtyrjrstyjsrtj',
    children: 'elngegr',
  },
]

export const CreateInstancePage: Page = () => {
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Create instance</HeaderBar>
      <Background>
        <StyledPaper>
          <Typography variant="h6">Create instance</Typography>
          <ContentWrapper>
            {mock.map(({ header, children }, idx) => (
              <InstanceCard key={idx} header={header}>
                {children}
              </InstanceCard>
            ))}
          </ContentWrapper>
        </StyledPaper>
      </Background>
    </>
  )
}

CreateInstancePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
