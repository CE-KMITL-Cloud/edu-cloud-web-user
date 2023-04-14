import { Popover } from '@mui/material'
import { ReactNode } from 'react'

interface CorePopoverProps {
  anchorEl: null | Element
  onClose?: () => void
  open?: boolean
  children: ReactNode
  width?: number
}

export const CorePopover = ({ anchorEl, onClose, open = false, children, width, ...restProps }: CorePopoverProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      disableScrollLock
      transformOrigin={{
        horizontal: 'right',
        vertical: -4, // * Gap
      }}
      transitionDuration={{
        appear: 0,
        enter: 0,
        exit: 0,
      }}
      onBackdropClick={onClose}
      keepMounted={true}
      onClose={onClose}
      BackdropProps={{ invisible: true }}
      PaperProps={{ sx: { width: width } }}
      disablePortal={true}
      disableEnforceFocus={true}
      disableAutoFocus={true}
      {...restProps}
    >
      {children}
    </Popover>
  )
}
