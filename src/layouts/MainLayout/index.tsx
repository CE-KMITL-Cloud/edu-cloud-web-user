import { type ReactNode } from 'react'

import { VerticalLayout } from 'layouts/VerticalLayout'

import { useSections } from 'components/core/CoreSidebar/config'

import { useSettings } from 'hooks/useSettings'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const settings = useSettings()
  const sections = useSections()

  return <VerticalLayout sections={sections} navColor={settings.navColor} {...props} />
}
