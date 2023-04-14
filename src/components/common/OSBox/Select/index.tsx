import { MenuItem, SelectChangeEvent, Typography } from '@mui/material'

import { StyledSelect } from './styled'

interface SelectProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value)
  }

  return (
    <StyledSelect value={value} onClick={(event) => event.stopPropagation()} onChange={handleChange}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          <Typography>{option}</Typography>
        </MenuItem>
      ))}
    </StyledSelect>
  )
}
