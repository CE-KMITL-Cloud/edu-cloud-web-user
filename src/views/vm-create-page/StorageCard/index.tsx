import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { CheckBoxWrapper, Row } from './styled'

// Update the StorageCardProps to include the callback function
export interface StorageCardProps {
  storages: string[]
  onStorageOptionSelect: (value: string) => void
}

export const StorageCard = (props: StorageCardProps) => {
  const { storages, onStorageOptionSelect } = props
  const [storageOption, setStorageOption] = useState<string>('default')

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedOption = event.target.value
    setStorageOption(selectedOption)
    onStorageOptionSelect(selectedOption)
  }

  return (
    <TemplateCard HeaderText="Storages" glowing={true}>
      <Row>
        <TextField
          name="option"
          onChange={handleOptionChange}
          select
          SelectProps={{ native: true }}
          sx={{
            width: 200,
            maxWidth: '100%',
          }}
          variant="outlined"
          value={storageOption}
        >
          {storages.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </Row>
    </TemplateCard>
  )
}
