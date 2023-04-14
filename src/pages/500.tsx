import { Box, Button, Container, type Theme, Typography, useMediaQuery } from '@mui/material'

import { CoreLink } from 'components/core/CoreLink'
import { CoreSeo } from 'components/core/CoreSeo'

import { paths } from 'routes/paths'

const InternalServerError = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <>
      <CoreSeo title="Error: Server Error" />
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          py: '80px',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6,
            }}
          >
            <Box
              alt="Internal server error"
              component="img"
              src="/static/assets/errors/error-500.png"
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" variant={mdUp ? 'h1' : 'h4'}>
            500: Internal Server Error
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 0.5 }}>
            You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <CoreLink href={paths.index}>
              <Button>Back to Home</Button>
            </CoreLink>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default InternalServerError
