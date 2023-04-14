import { InputAdornment, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { TemplateCard } from 'views/vm-template-page/TemplateCard'

import { TextFieldWrapper, TextWrapper } from './styled'

export const HostnameCard = () => {
  const [hostname, setHostname] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHostname(event.target.value)
  }

  return (
    <TemplateCard HeaderText="Hostname">
      <TextFieldWrapper>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CoreSvg src="/static/icons/computer.svg" width={16} height={16} />
              </InputAdornment>
            ),
          }}
          placeholder="demo-01"
          label="hostname"
          value={hostname}
          onChange={handleChange}
          fullWidth
        />
        <TextWrapper>
          <Typography variant="body2" color="secondary.main" fontSize={10}>
            description about rule of input
          </Typography>
        </TextWrapper>
      </TextFieldWrapper>
    </TemplateCard>
  )
}
