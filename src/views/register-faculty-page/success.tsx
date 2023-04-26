import { Button, Typography } from '@mui/material'

import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

import { ScreenFlexCenter } from './styled'

interface SuccessProps {
  resetAllValue?: () => void
}

export const Success = ({ resetAllValue }: SuccessProps) => {
  return (
    <ScreenFlexCenter>
      <Typography variant="h1" color="primary.main">
        Success
      </Typography>
      <CoreLink path={paths.dashboard}>
        <Button variant="contained" color="primary">
          Go to dashboard
        </Button>
      </CoreLink>
      <Button variant="outlined" color="primary" onClick={resetAllValue}>
        Continue to Sign up
      </Button>
    </ScreenFlexCenter>
  )
}
