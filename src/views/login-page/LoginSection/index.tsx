import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { CoreLink } from 'components/core/CoreLink'
import { CoreSvg } from 'components/core/CoreSvg'

import { TextField } from 'components/common/TextField'

import {
  AgreementBox,
  ButtonGroup,
  ContentsWrapper,
  LogoWrapper,
  Root,
  StyledLoginButton,
  StyledOAuthButton,
  TextFieldWrapper,
} from './styled'

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
            <TextField label="username / email" value={email} setValue={(value) => setEmail(value)} fullWidth />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextField
              type="password"
              label="password"
              value={password}
              setValue={(value) => setPassword(value)}
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
          <StyledLoginButton variant="contained" color="primary" size="medium" disabled={!isCheck} fullWidth>
            Login
          </StyledLoginButton>
          <Typography variant="body2" color="text.light">
            or
          </Typography>
          <StyledOAuthButton
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<CoreSvg src="/static/icons/google.svg" />}
            fullWidth
          >
            Sign In with @kmitl.ac.th
          </StyledOAuthButton>
        </ButtonGroup>
      </ContentsWrapper>
    </Root>
  )
}
