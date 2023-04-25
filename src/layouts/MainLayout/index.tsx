import { observer } from 'mobx-react-lite'
import { type ReactNode } from 'react'

import { VerticalLayout } from 'layouts/VerticalLayout'

import { useSections } from 'components/core/CoreSidebar/config'

import { useSettings } from 'hooks/useSettings'

import { accountStore } from 'store/account-store'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout = observer((props: MainLayoutProps) => {
  const settings = useSettings()
  const sections = useSections(accountStore.role)

  return <VerticalLayout sections={sections} navColor={settings.navColor} {...props} />
})
