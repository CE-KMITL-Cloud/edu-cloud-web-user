import { Typography } from '@mui/material'
import Image from 'next/image'

import { LoginSection } from './LoginSection'
import { ImgCon1, ImgCon2, Root, StyledBox, StyledStack, TextWrapper } from './styled'

export const LoginPage = () => {
  return (
    <Root>
      <StyledBox>
        <StyledStack>
          <TextWrapper>
            <Typography variant="h3" color="text.darken" textAlign="left">
              Educational <b>Cloud</b>
              <br /> Platform Service
            </Typography>
          </TextWrapper>
          <ImgCon1>
            <Image src="/static/images/desktop.svg" alt="computer" height={250} width={400} />
          </ImgCon1>
          <ImgCon2>
            <Image src="/static/images/server-iso.png" alt="server iso" height={240} width={280} />
          </ImgCon2>
        </StyledStack>
      </StyledBox>
      <LoginSection />
    </Root>
  )
}
