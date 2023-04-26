import { InputAdornment, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { TextFieldWrapper, TextWrapper } from './styled'

interface HostnameProps {
  onHostnameChange: (newHostname: string) => void
}

export const HostnameCard = (props: HostnameProps) => {
  const { onHostnameChange } = props
  const [hostname, setHostname] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newHostname = event.target.value
    setHostname(event.target.value)
    onHostnameChange(newHostname)
  }

  return (
    <TemplateCard HeaderText="Hostname" glowing={true}>
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
