import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

import { TemplateCard } from 'views/vm-template-page/TemplateCard'

enum Option {
  'create' = 'create',
  'select' = 'select',
}

export const ExternalIpCard = () => {
  const [option, setOption] = useState<Option>(Option.create)

  useEffect(() => console.log(option), [option])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as Option)
  }

  return (
    <TemplateCard HeaderText="Networks">
      <Box pl={2}>
        <FormControl>
          <RadioGroup defaultValue={Option.create} onChange={handleInputChange}>
            <FormControlLabel value={Option.create} control={<Radio />} label="create" />
            <FormControlLabel value={Option.select} control={<Radio />} label="select" />
          </RadioGroup>
        </FormControl>
      </Box>
    </TemplateCard>
  )
}
