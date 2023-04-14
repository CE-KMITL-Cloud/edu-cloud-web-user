import Image from 'next/image'

import { NavbarLayout } from 'layouts/NavbarLayout'

import { Page } from 'types/page'

import { Description } from 'views/home-page/Description'

import { ImageContainer, Root, StyledContainer } from './styled'

export const HomePage: Page = () => {
  return (
    <Root>
      <StyledContainer>
        <Description />
        <ImageContainer>
          <Image
            src="/static/images/desktop.svg"
            alt="computer"
            style={{
              objectPosition: 'right center',
            }}
            priority
            fill
          />
        </ImageContainer>
      </StyledContainer>
    </Root>
  )
}

HomePage.getLayout = (page) => <NavbarLayout>{page}</NavbarLayout>
