import { useRouter } from 'next/router'
import { type PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'

import { i18n } from 'i18n/instance/client'

type Props = PropsWithChildren<{}>

const ChangeLanguageEffect = ({ children }: Props) => {
  const router = useRouter()

  const [isI18nReady, setIsI18nReady] = useState<boolean>(false)

  const { i18n } = useTranslation()

  const changeLangauge = useCallback(async () => {
    await i18n.changeLanguage(router.locale)
    setIsI18nReady(true)
  }, [router.locale])

  useEffect(() => {
    changeLangauge()
  }, [changeLangauge])

  if (i18n.isInitialized && isI18nReady) return <>{children}</>

  return null
}

export const I18nProvider = ({ children }: Props) => (
  <I18nextProvider i18n={i18n}>
    <ChangeLanguageEffect>{children}</ChangeLanguageEffect>
  </I18nextProvider>
)
