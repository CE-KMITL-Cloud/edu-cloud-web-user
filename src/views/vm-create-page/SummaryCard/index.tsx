import { Divider, Typography } from '@mui/material'
import React from 'react'

import { Root } from './styled'

export interface SummaryProps {
  hostname: string
  cpu: number
  ram: number
  disk: number
  cdrom: string
  storage: string
}

export const SummaryCard = (props: SummaryProps) => {
  const { hostname, cpu, ram, disk, cdrom, storage } = props

  return (
    <Root>
      <Typography variant="body1" color="primary.lightest" fontWeight={700}>
        Summary
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Hostname
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500}>
        {hostname ? hostname : 'Please enter'}
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Spec
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500}>
        CPU {cpu} vCPU
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500}>
        RAM {ram} GB
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500}>
        Disk size : {disk} GB
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        CDROM
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500} textAlign={'center'}>
        {cdrom ? cdrom : 'Please select'}
      </Typography>
      <Divider flexItem />
      <Typography variant="body1" color="primary.lightest" gutterBottom>
        Storage
      </Typography>
      <Typography variant="body1" color="primary.main" fontWeight={500}>
        {storage ? storage : 'Please select'}
      </Typography>
    </Root>
  )
}
