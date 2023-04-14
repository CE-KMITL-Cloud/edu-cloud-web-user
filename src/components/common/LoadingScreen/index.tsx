import { CircularProgress } from '@mui/material'

import { ScreenStyled } from './styled'

export const LoadingScreen = () => (
  <ScreenStyled>
    <CircularProgress />
  </ScreenStyled>
)
