import { Box, Drawer, Stack } from '@mui/material'
import { useCallback } from 'react'

import { Scrollbar } from 'components/common/Scrollbar'

import type { Settings } from 'types/settings'

import { SettingsHeader } from './Header'
import { OptionsColorPreset } from './OptionsColorPreset'
import { OptionsColorScheme } from './OptionsColorScheme'
import { OptionsContrast } from './OptionsContrast'
import { OptionsDirection } from './OptionsDirection'
import { OptionsNavColor } from './OptionsNavColor'
import { OptionsStretch } from './OptionsStretch'

interface SettingsDrawerProps {
  canReset?: boolean
  onClose?: () => void
  onReset?: () => void
  onUpdate?: (settings: Settings) => void
  open?: boolean
  values?: Settings
}

export const SettingsDrawer = ({
  canReset,
  onClose,
  onUpdate,
  onReset,
  open,
  values = {},
  ...other
}: SettingsDrawerProps) => {
  const handleFieldUpdate = useCallback(
    (field: keyof Settings, value: unknown): void => {
      onUpdate?.({
        [field]: value,
      })
    },
    [onUpdate],
  )

  return (
    <Drawer
      disableScrollLock
      anchor="right"
      onClose={onClose}
      open={open}
      ModalProps={{
        disableScrollLock: false,
        BackdropProps: {
          invisible: true,
        },
        sx: { zIndex: 1400 },
      }}
      PaperProps={{
        elevation: 24,
        sx: {
          maxWidth: '100%',
          width: 440,
        },
      }}
      {...other}
    >
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%',
          },
          '& .simplebar-scrollbar:before': {
            background: 'var(--nav-scrollbar-color)',
          },
        }}
      >
        <Box width={440} sx={{ position: 'fixed', top: 0 }}>
          <SettingsHeader onClose={onClose} canReset={canReset} onReset={onReset} />
        </Box>
        <Stack spacing={5} sx={{ pt: 8, px: 3, pb: 3 }}>
          <OptionsColorPreset
            onChange={(value) => handleFieldUpdate('primaryColorPreset', value)}
            value={values.primaryColorPreset}
          />
          {/* <OptionsColorPreset
            onChange={(value) => handleFieldUpdate('secondaryColorPreset', value)}
            value={values.secondaryColorPreset}
          /> */}
          <OptionsColorScheme
            onChange={(value) => handleFieldUpdate('paletteMode', value)}
            value={values.paletteMode}
          />
          <OptionsNavColor onChange={(value) => handleFieldUpdate('navColor', value)} value={values.navColor} />
          <OptionsStretch onChange={(value) => handleFieldUpdate('stretch', value)} value={values.stretch} />
          <OptionsContrast onChange={(value) => handleFieldUpdate('contrast', value)} value={values.contrast} />
          <OptionsDirection onChange={(value) => handleFieldUpdate('direction', value)} value={values.direction} />
        </Stack>
      </Scrollbar>
    </Drawer>
  )
}
