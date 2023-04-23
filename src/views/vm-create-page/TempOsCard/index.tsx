import { TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { Row } from './styled'

// Update the StorageCardProps to include the callback function
export interface OsCardProps {
  os: string[]
  onOsOptionSelect: (value: string) => void
}

export const TempOsCard = (props: OsCardProps) => {
  const { os, onOsOptionSelect } = props
  const [osOption, setOsOption] = useState<string>('default')

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedOption = event.target.value
    setOsOption(selectedOption)
    onOsOptionSelect(selectedOption)
  }

  return (
    <TemplateCard HeaderText="Operation System" glowing={true}>
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
          value={osOption}
        >
          {os.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </Row>
    </TemplateCard>
  )
}
