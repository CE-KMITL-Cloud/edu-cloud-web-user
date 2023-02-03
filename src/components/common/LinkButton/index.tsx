import { CoreLink } from 'components/core/CoreLink'
import type { CoreLinkProps } from 'components/core/CoreLink'

import { StyledButton } from './styled'

type LinkButtonProps = CoreLinkProps & {
  glow?: boolean
}

export const LinkButton = ({ children, glow = false, ...rest }: LinkButtonProps) => {
  return (
    <CoreLink {...rest}>
      <StyledButton variant="text" color="primary" glow={glow} size="medium" disableRipple disableTouchRipple>
        {children}
      </StyledButton>
    </CoreLink>
  )
}
