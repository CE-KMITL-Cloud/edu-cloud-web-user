import { languages } from 'i18n/settings'

export type Languages = (typeof languages)[number]

export const isAcceptLanguage = (language?: string): language is Languages =>
  language !== undefined && languages.includes(language as never)
