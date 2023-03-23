import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

import { getOptions } from 'i18n/settings'

const i18nextInstance = createInstance()

i18nextInstance
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`../locales/${language}/${namespace}.ts`)))
  .init(getOptions())

export { i18nextInstance as i18n }
export default i18nextInstance
