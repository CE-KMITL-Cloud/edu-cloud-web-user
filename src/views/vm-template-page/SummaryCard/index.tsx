import { Divider, Typography } from '@mui/material'

import { Root } from './styled'

export const SummaryCard = () => {
  return (
    <Root>
      <Typography variant="body1" color="primary.lightest" fontWeight={700}>
        Summary
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Hostname
      </Typography>
      <Typography variant="body1" color="primary.main">
        Demo 1
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Spec
      </Typography>
      <Typography variant="body1" color="primary.main">
        1 Core vCPU
      </Typography>
      <Typography variant="body1" color="primary.main">
        2 GB RAM
      </Typography>
      <Typography variant="body1" color="primary.main">
        32 GB SSD
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        External IP
      </Typography>
      <Typography variant="body1" color="primary.main">
        Create new IP address
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Custom private network
      </Typography>
      <Typography variant="body1" color="primary.main">
        default
      </Typography>
    </Root>
  )
}
