import { Box } from '@mui/material'

import { Screen } from 'layouts/Screen'

import { Page } from 'types/page'

export const BlogPage: Page = () => {
  return <Box>blog</Box>
}

BlogPage.getLayout = (page) => <Screen>{page}</Screen>
