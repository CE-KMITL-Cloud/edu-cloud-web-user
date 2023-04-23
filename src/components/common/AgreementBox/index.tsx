import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

import { Root } from './styled'

interface AgreementBoxProps {
  isCheck?: boolean
  setIsCheck: (value: boolean) => void
}

export const AgreementBox = ({ setIsCheck, isCheck }: AgreementBoxProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCheck(event.target.checked)
  }

  return (
    <Root>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isCheck} onChange={handleCheckboxChange} disableRipple />}
          label={
            <Typography variant="body2" textAlign="left">
              agree terms
            </Typography>
          }
        />
      </FormGroup>
    </Root>
  )
}
