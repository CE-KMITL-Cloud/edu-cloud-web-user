import OutputIcon from '@mui/icons-material/Output'
import { Button, Container, IconButton, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { translation } from 'i18n/tokens'

import { CoreLink } from 'components/core/CoreLink'

import { Logo } from 'components/common/Logo'
import { LinkButton } from 'components/common/Navbar/LinkButton'

import { authService } from 'services/auth-service'

import { accountStore } from 'store/account-store'

import { type Languages, isAcceptLanguage } from 'types/languages'

import {
  SignInButton,
  SignInButtonWrapper,
  SignOutButtonWrapper,
  StyledAppBar,
  StyledButtonsGroupWrapper,
  StyledRows,
  StyledToolbar,
} from './styled'

export const Navbar = observer(() => {
  const router = useRouter()

  const { t } = useTranslation()

  const [language, setLanguage] = useState<Languages>(isAcceptLanguage(router.locale) ? router.locale : 'en')

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
            <Logo />
            <StyledButtonsGroupWrapper direction="row">
              <LinkButton path="/" glow={router.pathname === '/'}>
                Home
              </LinkButton>
              <LinkButton path="/about" glow={router.pathname === '/about'}>
                About
              </LinkButton>
              <LinkButton path="/blog" glow={router.pathname === '/blog'}>
                Blog
              </LinkButton>
              <LinkButton path="/document" glow={router.pathname === '/document'}>
                Document
              </LinkButton>
              <SignInButtonWrapper>
                <CoreLink path={accountStore.isLoggedIn ? 'dashboard' : '/login'}>
                  <SignInButton variant="contained" color="primary">
                    {t(accountStore.isLoggedIn ? translation.dashboard : translation.signIn)}
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
              {accountStore.isLoggedIn && (
                <SignOutButtonWrapper>
                  <IconButton size="small" color="primary" onClick={() => authService.logout()}>
                    <OutputIcon />
                  </IconButton>
                </SignOutButtonWrapper>
              )}
            </StyledButtonsGroupWrapper>
          </StyledRows>
        </Container>
      </StyledToolbar>
    </StyledAppBar>
  )
})
