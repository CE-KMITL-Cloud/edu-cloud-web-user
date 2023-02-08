import { InitOptions } from 'i18next'

export const cookieName = 'i18next'

export const allNS = ['translation', 'home'] as const
export const languages = ['en', 'th'] as const
export const defaultNS = 'translation'
export const fallbackLanguage = 'en'

export const getOptions = (
  language: string = fallbackLanguage,
  ns: string | string[] | readonly string[] = allNS,
): InitOptions => {
  return {
    // debug: true,
    fallbackLng: fallbackLanguage,
    supportedLngs: languages,
    lng: language,
    fallbackNS: defaultNS,
    defaultNS: defaultNS,
    ns: ns,
  }
}
