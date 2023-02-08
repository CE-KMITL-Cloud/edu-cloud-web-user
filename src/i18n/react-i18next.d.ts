// * import the original type declarations
import 'react-i18next'

// * import all namespaces (for the default language, only)
import home_ns from './locales/en/home.json'
import translation_ns from './locales/en/translation.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'

    resources: {
      home: typeof home_ns
      translation: typeof translation_ns
    }
  }
}
