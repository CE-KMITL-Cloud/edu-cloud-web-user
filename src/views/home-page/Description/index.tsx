import { Button, Typography } from '@mui/material'

import { ButtonWrapper, Root } from './styled'

export const Description = () => {
  return (
    <Root>
      <Typography variant="h2" color="text.darken">
        Educational <b>Cloud</b>
        <br /> Platform Service
      </Typography>
      <Typography variant="body2" color="text.darken">
        Educational cloud platform services are based on open-source software such as KVM, LXC/LXD, Libvirt library, and
        Infrastructure. existing original to be used within the Department of Computer Engineering The aim is to develop
        a private cloud system of the department to meet the needs and facilitate the use of learners and teachers in
        various fields
      </Typography>
      <ButtonWrapper>
        <Button variant="contained" color="primary" size="large">
          More
        </Button>
      </ButtonWrapper>
    </Root>
  )
}
