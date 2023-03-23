import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { HideableTextField } from 'components/common/HideableTextField'
import { CoreLink } from 'components/core/CoreLink'

import { AgreementBox, ButtonGroup, ContentsWrapper, LogoWrapper, Root, TextFieldWrapper } from './styled'

export const LoginSection = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [isCheck, setIsCheck] = useState<boolean>(false)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCheck(event.target.checked)
  }

  return (
    <Root>
      <ContentsWrapper>
        <CoreLink path="/">
          <LogoWrapper>
            <img src="/static/images/logo.png" width={176} />
          </LogoWrapper>
        </CoreLink>
        <Box width="100%">
          <TextFieldWrapper>
            <TextField label="username / email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <HideableTextField
              type="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </TextFieldWrapper>
          <AgreementBox>
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
          </AgreementBox>
        </Box>
        <ButtonGroup>
          <Button variant="contained" color="primary" size="medium" disabled={!isCheck} fullWidth>
            Login
          </Button>
          <Typography variant="body2" color="text.dark">
            or
          </Typography>
          {/* TODO: Link to register page*/}
          <CoreLink path="#">
            <Button variant="contained" color="secondary" size="medium" fullWidth>
              Register
            </Button>
          </CoreLink>
        </ButtonGroup>
      </ContentsWrapper>
    </Root>
  )
}
