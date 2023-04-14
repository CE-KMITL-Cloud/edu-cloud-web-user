import { Button, Typography } from '@mui/material'

import { ActionZone } from 'views/vm-instance-page/ActionZone'

import { HeaderPaper, Root } from './styled'

export const Header = () => {
  const handleCreateInstance = () => {
    /** Do something */
  }

  return (
    <Root>
      <HeaderPaper>
        <Typography variant="h6" fontWeight={700}>
          My instance
        </Typography>
        <Button
          variant="contained"
          onClick={handleCreateInstance}
          startIcon={<img src="/static/icons/server.png" width={16} height={16} />}
        >
          Create instance
        </Button>
      </HeaderPaper>
      <ActionZone />
    </Root>
  )
}
