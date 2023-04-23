import { Chip, Stack, Typography } from '@mui/material'

import type { Contrast } from 'themes'

interface Option {
  label: string
  value: Contrast
}

const options: Option[] = [
  {
    label: 'Normal',
    value: 'normal',
  },
  {
    label: 'High',
    value: 'high',
  },
]

interface OptionsContrastProps {
  onChange?: (value: Contrast) => void
  value?: Contrast
}

export const OptionsContrast = ({ onChange, value }: OptionsContrastProps) => {
  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="overline">
        Contrast
      </Typography>
      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={2}>
        {options.map((option) => (
          <Chip
            key={option.label}
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
