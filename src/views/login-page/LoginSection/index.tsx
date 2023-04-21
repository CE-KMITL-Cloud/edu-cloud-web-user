import { LoadingButton } from '@mui/lab'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { CoreLink } from 'components/core/CoreLink'

import { HideableTextField } from 'components/common/HideableTextField'
import { Logo } from 'components/common/Logo'

import { authService } from 'services/auth-service'

import { LoginStatus } from 'types/enums'

import { AgreementBox } from './AgreementBox'
import { ButtonGroup, ContentsWrapper, Root, TextFieldWrapper } from './styled'

export const LoginSection = () => {
  const router = useRouter()

  // TODO: Remove default value.
  const [email, setEmail] = useState<string>('62555555@kmitl.ac.th')
  const [password, setPassword] = useState<string>('Botlee007')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [isCheck, setIsCheck] = useState<boolean>(false)

  const handleLogin = async () => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const loginStatus = await authService.login(email, password)

      switch (loginStatus) {
        case LoginStatus.SUCCESS: {
          router.push('/')
          break
        }
        // case LoginStatus.NOT_CONFIRMED: {
        //   router.push('/pending-confirmation')
        //   break
        // }
        case LoginStatus.UNAUTHORIZED:
          setErrorMessage('Incorrect email or password')
          break
        case LoginStatus.FAIL: {
          setErrorMessage('Login failed')
          break
        }
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong')
    }
    setIsLoading(false)
  }

  return (
    <Root>
      <ContentsWrapper>
        <Logo width={176} />
        <Box width="100%">
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault()
              handleLogin()
            }}
          >
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
            <input type="submit" hidden />
          </form>
          <AgreementBox isCheck={isCheck} setIsCheck={(value) => setIsCheck(value)} />
          <Box height={20}>
            <Typography variant="caption" component="p" color="error" textAlign="center">
              {errorMessage}
            </Typography>
          </Box>
        </Box>
        <ButtonGroup>
          <LoadingButton
            variant="contained"
            color="primary"
            size="medium"
            disabled={!isCheck}
            loading={isLoading}
            onClick={handleLogin}
            fullWidth
          >
            Login
          </LoadingButton>
          <Typography variant="body2" color="text.dark">
            or
          </Typography>
          {/* TODO: Link to register page*/}
          <CoreLink path="#">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              fullWidth
              onClick={() => authService.register(email, email, password, 'student')}
            >
              Register
            </Button>
          </CoreLink>
        </ButtonGroup>
      </ContentsWrapper>
    </Root>
  )
}
