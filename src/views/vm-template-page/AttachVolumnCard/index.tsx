import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

import { TemplateCard } from 'views/vm-template-page/TemplateCard'

import { CheckBoxWrapper, TextFieldWrapper } from './styled'

export const AttachVolumnCard = () => {
  const [isEnable, setIsEnable] = useState<boolean>(false)

  const [size, setSize] = useState<string>('')
  const [name, setName] = useState<string>('')

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsEnable(event.target.checked)
  }

  const handleChangeSize = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  useEffect(() => {
    if (!isEnable) {
      setSize('')
      setName('')
    }
  }, [isEnable])

  return (
    <TemplateCard HeaderText="Attach Volumn">
      <CheckBoxWrapper>
        <FormControlLabel
          control={<Checkbox checked={isEnable} onChange={handleChangeCheckbox} />}
          label={<Typography variant="body2">Enable Attach Volumn</Typography>}
        />
      </CheckBoxWrapper>
      <TextFieldWrapper>
        <TextField
          disabled={!isEnable}
          placeholder="demo-01"
          label="Size"
          value={size}
          onChange={handleChangeSize}
          fullWidth
        />
      </TextFieldWrapper>
      <TextFieldWrapper>
        <TextField
          disabled={!isEnable}
          placeholder="demo-01"
          label="Name"
          value={name}
          onChange={handleChangeName}
          fullWidth
        />
      </TextFieldWrapper>
    </TemplateCard>
  )
}
