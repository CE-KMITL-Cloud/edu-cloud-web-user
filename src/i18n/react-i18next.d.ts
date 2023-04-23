// * import the original type declarations
import 'react-i18next'

// * import all namespaces (for the default language, only)
import { HomeTokenType, TranslationTokenType } from 'i18n/tokens'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'

    resources: {
      home: HomeTokenType
      translation: TranslationTokenType
    }
  }
}
