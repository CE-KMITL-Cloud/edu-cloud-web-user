import { ROUTES_CONFIG } from 'routes/config'

import { Role } from 'types'
import { PathsValueType } from 'types/route'

export const isValidRole = (role: Role | 'unknown' | undefined, path: PathsValueType): boolean => {
  if (!role) {
    return false
  }

  if (role === 'unknown') {
    return ROUTES_CONFIG[path].protect.guess
  }

  return ROUTES_CONFIG[path].protect[role]
}
