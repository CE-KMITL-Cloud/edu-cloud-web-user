import { Button, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CoreLink } from 'components/core/CoreLink'

import { LinkButton } from 'components/common/LinkButton'

import { isAcceptLanguage } from 'utils/isAcceptLanguage'

import {
  LogoWrapper,
  SignInButton,
  SignInButtonWrapper,
  StyledAppBar,
  StyledButtonsGroupWrapper,
  StyledRows,
  StyledToolbar,
} from './styled'

export const Navbar = () => {
  const router = useRouter()

  const { t } = useTranslation()

  const [language, setLanguage] = useState<'th' | 'en'>(isAcceptLanguage(router.locale) ? router.locale : 'en')

  const handleToggleLanguage = () => {
    const { pathname, asPath, query } = router

    if (language === 'en') {
      router.push({ pathname, query }, asPath, { locale: 'th' })
      setLanguage('th')
    } else {
      router.push({ pathname, query }, asPath, { locale: 'en' })
      setLanguage('en')
    }
  }

  return (
    <StyledAppBar>
      <StyledToolbar disableGutters>
        <Container>
          <StyledRows direction="row">
            <CoreLink path="/">
              <LogoWrapper>
                <img src="/static/images/logo.png" />
              </LogoWrapper>
            </CoreLink>
            <StyledButtonsGroupWrapper direction="row">
              <LinkButton path="/" glow={router.pathname === '/'}>
                Home
              </LinkButton>
              <LinkButton path="/about" glow={router.pathname === '/about'}>
                About
              </LinkButton>
              <LinkButton path="/service" glow={router.pathname === '/service'}>
                Service
              </LinkButton>
              <LinkButton path="/blog" glow={router.pathname === '/blog'}>
                Blog
              </LinkButton>
              <LinkButton path="/document" glow={router.pathname === '/document'}>
                Document
              </LinkButton>
              <SignInButtonWrapper>
                <CoreLink path="/login">
                  <SignInButton variant="contained" color="secondary">
                    {t`sign in`}
                  </SignInButton>
                </CoreLink>
              </SignInButtonWrapper>
              <Button
                variant="text"
                color="primary"
                onClick={handleToggleLanguage}
                disableRipple
                disableTouchRipple
                disableFocusRipple
              >
                <Typography variant="body1" color="inherit" textTransform="uppercase" fontWeight={700}>
                  {language}
                </Typography>
              </Button>
            </StyledButtonsGroupWrapper>
          </StyledRows>
        </Container>
      </StyledToolbar>
    </StyledAppBar>
  )
}
