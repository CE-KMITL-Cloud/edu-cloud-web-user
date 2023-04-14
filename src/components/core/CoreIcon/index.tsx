// icons
import { Icon } from '@iconify/react'
import type { IconifyIcon } from '@iconify/types'
// @mui
import { Box, BoxProps } from '@mui/material'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------

interface IconifyProps extends BoxProps {
  icon: IconifyIcon | string
  sx?: BoxProps['sx']
}

export const Iconify: React.FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
}

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
}
