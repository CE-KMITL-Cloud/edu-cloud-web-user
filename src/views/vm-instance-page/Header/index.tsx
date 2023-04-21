import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import type { FC } from 'react'

import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

import { Instance, InstancePropTypes } from 'types/instance'

import { ActionZone } from 'views/vm-instance-page/ActionZone'

import { HeaderPaper, Root } from './styled'

export const Header: FC = () => {
  return (
    <Root>
      <HeaderPaper>
        <Typography variant="h6" fontWeight={700}>
          My instance
        </Typography>
        <CoreLink path={paths.vmCreate}>
          <Button variant="contained" startIcon={<img src="/static/icons/server.png" width={16} height={16} />}>
            Create instance
          </Button>
        </CoreLink>
      </HeaderPaper>
      <ActionZone />
    </Root>
  )
}

Header.propTypes = {
  selectedInstance: PropTypes.oneOfType([InstancePropTypes, PropTypes.oneOf([null])]),
}
