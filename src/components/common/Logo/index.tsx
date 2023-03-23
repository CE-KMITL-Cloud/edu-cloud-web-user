import { CoreLink } from 'components/core/CoreLink'

import { paths } from 'routes/paths'

export const Logo = () => (
  <CoreLink path={paths.index}>
    <img src="/static/images/logo.png" />
  </CoreLink>
)
