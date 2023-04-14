import { Button } from '@mui/material'

import { MainLayout } from 'layouts/MainLayout'

import { CoreLink } from 'components/core/CoreLink'

import { HeaderBar } from 'components/common/HeaderBar'

import { paths } from 'routes/paths'

import { Page } from 'types/page'

import { AttachVolumnCard } from 'views/vm-template-page/AttachVolumnCard/'
import { AuthenticationCard } from 'views/vm-template-page/AuthenticationCard/'
import { ExternalIpCard } from 'views/vm-template-page/ExternalIpCard/'
import { HostnameCard } from 'views/vm-template-page/HostnameCard/'
import { NetworkCard } from 'views/vm-template-page/NetworkCard'
import { OSCard } from 'views/vm-template-page/OSCard'
import { StarterCard } from 'views/vm-template-page/StarterCard/'
import { SummaryCard } from 'views/vm-template-page/SummaryCard/'

import { Aside, Contents, Section } from './styled'

export const VmTemplatePage: Page = () => {
  return (
    <>
      <HeaderBar iconSrc="ic:round-copy-all">VM Template</HeaderBar>
      <Contents>
        <Section>
          <OSCard />
          <StarterCard />
          <HostnameCard />
          <AuthenticationCard />
          <NetworkCard />
          <ExternalIpCard />
          <AttachVolumnCard />
        </Section>
        <Aside>
          <SummaryCard />
          <CoreLink path={paths.createInstance}>
            <Button variant="contained" color="success" size="medium">
              Create instance
            </Button>
          </CoreLink>
        </Aside>
      </Contents>
    </>
  )
}

VmTemplatePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
