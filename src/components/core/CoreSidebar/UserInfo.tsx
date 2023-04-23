import { Avatar, Box, Stack, SvgIcon, Typography } from '@mui/material'
import User01Icon from '@untitled-ui/icons-react/build/esm/User01'
import { observer } from 'mobx-react-lite'

import { accountStore } from 'store/account-store'

export const UserInfo = observer(() => {
  return (
    <Stack direction="row" sx={{ p: 3, backgroundColor: (theme) => theme.palette.secondary.alpha12 }}>
      <Box pr={2}>
        <Avatar
          sx={{
            height: 40,
            width: 40,
          }}
          src="/static/assets/avatars/avatar-anika-visser.png"
        >
          <SvgIcon>
            <User01Icon />
          </SvgIcon>
        </Avatar>
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
    </Stack>
  )
})
