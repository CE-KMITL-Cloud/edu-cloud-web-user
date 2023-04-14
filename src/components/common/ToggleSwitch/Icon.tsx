import { CoreSvg } from 'components/core/CoreSvg'

import { IconWrapper } from './styled'

interface IconProps {
  src?: string
}

export const Icon = ({ src }: IconProps): JSX.Element | null =>
  src === undefined ? null : (
    <IconWrapper>
      <CoreSvg src={src} width={16} height={16} className="toggle-switch-icon" fill={true} />
    </IconWrapper>
  )
