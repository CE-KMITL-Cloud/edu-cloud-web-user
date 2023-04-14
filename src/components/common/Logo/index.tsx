import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

import { LogoWrapper } from './styled'

interface LogoProps {
  width?: number
}

export const Logo = ({ width }: LogoProps) => (
  <CoreLink path={paths.index}>
    <LogoWrapper>
      <img src="/static/images/logo.png" width={width} />
    </LogoWrapper>
  </CoreLink>
)
