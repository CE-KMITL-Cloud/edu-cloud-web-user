import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

import { NavbarLayout } from 'layouts/NavbarLayout'
import { PaperLayout } from 'layouts/PaperLayout'

import { Page } from 'types/page'

import { ContentBox } from './styled'

export const AboutPage: Page = () => {
  return (
    <PaperLayout textHeader="about">
      <Stack direction="row" gap={4}>
        <Image src="/static/images/ce-server-room.png" alt="server" height={500} width={336} />
        <ContentBox>
          <Box py={3}>
            <Typography variant="h4" color="text.darken" fontWeight={700}>
              Background
            </Typography>
          </Box>
          <Typography variant="body1" color="text.darken">
            Educational cloud platform services are based on open-source software such as KVM, LXC/LXD, Libvirt library,
            and Infrastructure. Existing for internal use Department of Computer Engineering by the department has
            realized the importance of bringing the private cloud to use in teaching and research for services to
            teachers, students and researchers, promoting the ability of the department to have an infrastructure.
            important technology in further development in various fields.
          </Typography>
        </ContentBox>
      </Stack>
    </PaperLayout>
  )
}

AboutPage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
