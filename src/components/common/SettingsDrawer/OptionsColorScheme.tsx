import { Chip, PaletteMode, Stack, SvgIcon, Typography } from '@mui/material'
import Moon01Icon from '@untitled-ui/icons-react/build/esm/Moon01'
import SunIcon from '@untitled-ui/icons-react/build/esm/Sun'
import type { ReactElement } from 'react'

interface Option {
  label: string
  value: PaletteMode
  icon: ReactElement
}

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    icon: (
      <SvgIcon fontSize="small">
        <SunIcon />
      </SvgIcon>
    ),
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: (
      <SvgIcon fontSize="small">
        <Moon01Icon />
      </SvgIcon>
    ),
  },
]

interface OptionsColorSchemeProps {
  onChange?: (value: PaletteMode) => void
  value?: PaletteMode
}

export const OptionsColorScheme = ({ onChange, value }: OptionsColorSchemeProps) => {
  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Color Scheme
      </Typography>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={2}>
        {options.map((option) => (
          <Chip
            icon={option.icon}
            key={option.value}
            label={option.label}
            onClick={() => onChange?.(option.value)}
            sx={{
              borderColor: 'transparent',
              borderRadius: 1.5,
              borderStyle: 'solid',
              borderWidth: 2,
              ...(option.value === value && {
                borderColor: 'primary.main',
              }),
            }}
          />
        ))}
      </Stack>
    </Stack>
  )
}
