import OutputIcon from '@mui/icons-material/Output'
import { Avatar, Box, IconButton, Stack, SvgIcon, Typography } from '@mui/material'
import User01Icon from '@untitled-ui/icons-react/build/esm/User01'
import { observer } from 'mobx-react-lite'

import { authService } from 'services/auth-service'

import { accountStore } from 'store/account-store'

import { useForceLoadingContext } from 'contexts/force-loading-context'

import { SignOutButtonWrapper, StyledAvatar, UesrInfoRoot } from './styled'

export const UserInfo = observer(() => {
  const { load } = useForceLoadingContext()

  const logoutWithDelay = async () => {
    authService.logout()
    await load(500)
  }

  return (
    <UesrInfoRoot>
      <Box pr={1.5}>
        <StyledAvatar src="/static/assets/avatars/avatar-anika-visser.png">
          <SvgIcon>
            <User01Icon />
          </SvgIcon>
        </StyledAvatar>
      </Box>
      <Box>
        {accountStore.name && (
          <Typography variant="body1" color="primary.contrastText">
            {accountStore.name}
          </Typography>
        )}
        {accountStore.email && (
          <Typography variant="body2" color="secondary.main">
            {accountStore.email}
          </Typography>
        )}
      </Box>
      <SignOutButtonWrapper>
        <IconButton size="small" color="inherit" onClick={logoutWithDelay}>
          <OutputIcon />
        </IconButton>
      </SignOutButtonWrapper>
    </UesrInfoRoot>
  )
})
