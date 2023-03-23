import { GuestGuard } from 'guards/guest-guard'
import type { FC } from 'react'

export const withGuestGuard =
  <P extends object>(Component: FC<P>): FC<P> =>
  (props: P) =>
    (
      <GuestGuard>
        <Component {...props} />
      </GuestGuard>
    )
