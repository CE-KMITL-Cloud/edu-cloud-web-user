import { Typography } from '@mui/material'

import { CoreSvg } from 'components/core/CoreSvg'

import { IconWrapper, Root, Row } from './styled'

export const Sidebar = () => {
  return (
    <Root>
      <Row>
        <IconWrapper>
          <CoreSvg src="/static/icons/os/ubuntu-color.svg" width={20} />
        </IconWrapper>
        <Typography variant="body2" color="inherit" fontSize={12}>
          Ubuntu Lorem, ipsum dolor sit
        </Typography>
      </Row>
    </Root>
  )
}
