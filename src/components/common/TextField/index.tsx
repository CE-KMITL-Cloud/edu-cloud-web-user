import { Box, Collapse, IconButton, InputAdornment, Stack, TextFieldProps, Typography } from '@mui/material'
import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useCallback, useRef, useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Tooltip } from 'components/common/Tooltip'

import { isNumeric } from 'utils/regex'

import { StyledPaper, StyledTextField } from './styled'

type Props = TextFieldProps & {
  label?: string
  placeholder?: string
  value: string | undefined
  setValue: (value: string) => void
  icon?: ReactNode
  tip?: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

export const TextField = ({
  label,
  placeholder,
  value,
  setValue,
  icon,
  type,
  InputProps,
  error,
  helperText,
  tip,
  startAdornment,
  endAdornment,
  disabled,
  ...restProps
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputRef = useRef<HTMLDivElement>(null)

  const getInputType = (): HTMLInputTypeAttribute | undefined => {
    if (type !== 'password') {
      return type
    }

    if (showPassword) {
      return 'text'
    }

    return 'password'
  }

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const { value } = target

      if (restProps.inputMode === 'numeric') {
        if (isNumeric(value)) {
          setValue(value)
        }
      } else {
        setValue(value)
      }
    },
    [restProps.inputMode, setValue],
  )

  return (
    <Stack>
      <StyledPaper disabled={disabled} error={error} onClick={() => inputRef.current?.focus()}>
        {icon && <Box ml={2}>{icon}</Box>}
        <StyledTextField
          {...restProps}
          variant="filled"
          inputRef={inputRef}
          label={label}
          placeholder={placeholder}
          color="secondary"
          fullWidth={true}
          value={value}
          type={getInputType()}
          disabled={disabled}
          InputProps={{
            disableUnderline: true,
            sx: {
              padding: label ? undefined : '8px 12px',
              input: { paddingTop: label ? undefined : 1, paddingLeft: startAdornment ? 0 : 2, paddingRight: 2 },
            },
            startAdornment: startAdornment ? (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : undefined,
            endAdornment: endAdornment ? (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : type === 'password' ? (
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
            ) : tip ? (
              <InputAdornment position="end">
                <Tooltip title={tip} />
              </InputAdornment>
            ) : null,
            ...InputProps,
          }}
          InputLabelProps={{
            sx: { paddingLeft: 0.5, paddingRight: 0.5 },
          }}
          onChange={handleChange}
        />
      </StyledPaper>
      <Collapse in={!!helperText}>
        <Typography color="error" variant="label">
          {helperText ?? ' '}
        </Typography>
      </Collapse>
    </Stack>
  )
}
