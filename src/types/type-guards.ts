import { languages } from 'i18n/settings'

import { paths } from 'routes/paths'

import { Languages } from 'types/languages'
import { PathsValueType } from 'types/route'

export const isAcceptLanguage = (language?: string): language is Languages =>
  language !== undefined && languages.includes(language as never)

export const isPathsValueType = (x: string): x is PathsValueType => {
  return Object.values(paths).find((predicate) => predicate === x) !== undefined
}
