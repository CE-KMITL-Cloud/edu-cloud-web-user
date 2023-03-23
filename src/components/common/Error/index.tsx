import type { Theme } from '@mui/material'
import { Container, Typography, useMediaQuery } from '@mui/material'

import { CoreSeo } from 'components/core/CoreSeo'

import { Main, TypoWrapper } from './styled'

export interface ErrorProps {
  statusCode: number
  title: string
}

export const Error = ({ statusCode, title }: ErrorProps) => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const text = `${statusCode}: ${title}`

  return (
    <>
      <CoreSeo title={text} />
      <Main>
        <Container maxWidth="lg">
          <TypoWrapper>
            <Typography align="center" variant={mdUp ? 'h1' : 'h4'}>
              {text}
            </Typography>
          </TypoWrapper>
        </Container>
      </Main>
    </>
  )
}
