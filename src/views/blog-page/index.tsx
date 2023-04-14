import { Box } from '@mui/material'

import { NavbarLayout } from 'layouts/NavbarLayout'

import { Page } from 'types/page'

export const BlogPage: Page = () => {
  return <Box>blog</Box>
}

BlogPage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
