import { Button, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import type { FC } from 'react'

import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

import { ActionZone } from 'views/vm-instance-page/ActionZone'

import { HeaderPaper, Root } from './styled'

export const Header: FC = observer(() => {
  return (
    <Root>
      <HeaderPaper>
        <Typography variant="h6" fontWeight={700}>
          My instance
        </Typography>
        {accountStore.role !== 'student' && (
          <CoreLink path={paths.vmCreate}>
            <Button variant="contained" startIcon={<img src="/static/icons/server.png" width={16} height={16} />}>
              Create instance
            </Button>
          </CoreLink>
        )}
      </HeaderPaper>
      <ActionZone />
    </Root>
  )
})
