import Image from 'next/image'

import { Screen } from 'layouts/Screen'

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

HomePage.getLayout = (page) => <Screen>{page}</Screen>
