import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { CheckBoxWrapper, Row } from './styled'

const networkOptions = ['network1', 'network2', 'network3']

export const NetworkCard = () => {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  const [networkOption, setNetworkOption] = useState<string>('default')

  const handleChangeNetwork = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsEnable(event.target.checked)
  }

  return (
    <TemplateCard HeaderText="Networks">
      <Row>
        <CheckBoxWrapper>
          <FormControlLabel
            control={<Checkbox checked={isEnable} onChange={handleChangeNetwork} />}
            label={<Typography variant="body2">Enable Private Networking</Typography>}
          />
        </CheckBoxWrapper>
        <TextField
          name="option"
          onChange={(event) => setNetworkOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          sx={{
            width: 200,
            maxWidth: '100%',
          }}
          variant="outlined"
          value={networkOption}
        >
          {networkOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </Row>
    </TemplateCard>
  )
}
