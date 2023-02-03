import { Button, Container } from '@mui/material'
import { useRouter } from 'next/router'

import { LinkButton } from 'components/common/LinkButton'

import { CoreLink } from '../CoreLink'
import {
  LogoWrapper,
  SignInButtonWrapper,
  StyledAppBar,
  StyledButtonsGroupWrapper,
  StyledRows,
  StyledToolbar,
} from './styled'

export const Navbar = () => {
  const router = useRouter()

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
                  <Button variant="contained" color="secondary">
                    Sign in
                  </Button>
                </CoreLink>
              </SignInButtonWrapper>
            </StyledButtonsGroupWrapper>
          </StyledRows>
        </Container>
      </StyledToolbar>
    </StyledAppBar>
  )
}
