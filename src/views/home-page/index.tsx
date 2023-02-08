import Image from 'next/image'

import { Description } from './Description'
import { ImageContainer, Root, StyledContainer } from './styled'

export const HomePage = () => {
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
