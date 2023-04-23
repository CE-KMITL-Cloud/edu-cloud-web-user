import { Badge, IconButton, Stack, SvgIcon, Typography, badgeClasses } from '@mui/material'
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01'
import XIcon from '@untitled-ui/icons-react/build/esm/X'

interface SettingsHeaderProps {
  canReset?: boolean
  onClose?: () => void
  onReset?: () => void
}

export const SettingsHeader = ({ canReset, onClose, onReset }: SettingsHeaderProps) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={3}
      sx={{
        px: 3,
        pt: 2,
      }}
    >
      <Typography variant="h6">Settings</Typography>
      <Stack alignItems="center" direction="row" spacing={0.5}>
        <Badge
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          color="error"
          sx={{
            [`& .${badgeClasses.badge}`]: {
              top: 6,
              right: 6,
              ...(!canReset && {
                display: 'none',
              }),
            },
          }}
          variant="dot"
        >
          <IconButton color="inherit" onClick={onReset}>
            <SvgIcon fontSize="small">
              <RefreshCcw01Icon />
            </SvgIcon>
          </IconButton>
        </Badge>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
    </Stack>
  )
}
