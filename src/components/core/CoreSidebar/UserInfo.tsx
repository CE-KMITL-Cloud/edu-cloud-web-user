import OutputIcon from '@mui/icons-material/Output'
import { Box, IconButton, SvgIcon, Typography } from '@mui/material'
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
        <StyledAvatar src="/static/assets/avatars/icon.jpg">
          <SvgIcon>
            <User01Icon />
          </SvgIcon>
        </StyledAvatar>
      </Box>
      <Box maxWidth={160}>
        {accountStore.email && (
          <Typography variant="body1" color="primary.contrastText" textOverflow="ellipsis" noWrap>
            {accountStore.email}
          </Typography>
        )}
        {accountStore.email && (
          <Typography variant="body2" color="secondary.main" textOverflow="ellipsis" noWrap>
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
