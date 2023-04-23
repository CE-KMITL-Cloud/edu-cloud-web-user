import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { FormEventHandler, useState } from 'react'
import { FormEvent } from 'react'

import { NavbarLayout } from 'layouts/NavbarLayout'

import { AgreementBox } from 'components/common/AgreementBox'
import { HideableTextField } from 'components/common/HideableTextField'
import { Logo } from 'components/common/Logo'

import { withGuestGuard } from 'components/hocs/with-guest-guard'

import { authService } from 'services/auth-service'

import { Page } from 'types/page'

import { Contents, Root, TextFieldWrapper } from './styled'

export const RegisterPage: Page = withGuestGuard(() => {
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repassword, setRepassword] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const [isCheck, setIsCheck] = useState<boolean>(false)

  const handleRegister = async () => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      await authService.register(`${name} ${surname}`, email, password, 'student')
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong')
    }

    setIsLoading(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleRegister()
  }

  return (
    <Root>
      <Contents>
        <Logo width={176} />
        <Box width="100%">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Stack direction="row" justifyContent="space-between">
              <TextFieldWrapper>
                <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              </TextFieldWrapper>
              <TextFieldWrapper>
                <TextField label="surname" value={surname} onChange={(e) => setSurname(e.target.value)} fullWidth />
              </TextFieldWrapper>
            </Stack>
            <TextFieldWrapper>
              <TextField label="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
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
            <TextFieldWrapper>
              <HideableTextField
                type="password"
                label="re-enter password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
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

        <LoadingButton
          variant="contained"
          color="primary"
          size="medium"
          disabled={!isCheck || password !== repassword}
          loading={isLoading}
          onClick={handleRegister}
          fullWidth
        >
          sign up
        </LoadingButton>
      </Contents>
    </Root>
  )
})

RegisterPage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
