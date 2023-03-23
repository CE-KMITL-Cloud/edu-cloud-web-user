import { IconButton, InputAdornment, TextField, type TextFieldProps } from '@mui/material'
import { type HTMLInputTypeAttribute, useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

export const HideableTextField = ({ type, ...rest }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const getInputType = (): HTMLInputTypeAttribute | undefined => {
    if (type !== 'password') return type
    if (showPassword) return 'text'
    return 'password'
  }

  return (
    <TextField
      type={getInputType()}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              tabIndex={-1}
              onClick={() => setShowPassword((show) => !show)}
            >
              <CoreSvg
                src={`/static/icons/${showPassword ? 'eye-close.svg' : 'eye-open.svg'}`}
                width={24}
                height={24}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  )
}
