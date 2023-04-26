import { Typography } from '@mui/material'

import { HeaderPaper, Root } from './styled'

export const Header = () => {
  return (
    <Root>
      <HeaderPaper>
        <Typography variant="h6" fontWeight={700}>
          My Templates
        </Typography>
      </HeaderPaper>
    </Root>
  )
}
