import { useState } from 'react'

import { osStarterMockData } from 'mock/os-data'

import { TemplateCard } from 'views/vm-template-page/TemplateCard'

import { OsItemCard } from './Item'
import { ItemsContainer } from './styled'

export const StarterCard = () => {
  const [selectedOs, setSelectedOs] = useState<string | null>(null) // * id

  return (
    <TemplateCard HeaderText="Starter" glowing={true}>
      <ItemsContainer>
        {osStarterMockData.map(({ id, ...props }) => (
          <OsItemCard
            key={id}
            id={id}
            glow={id === selectedOs}
            onChange={(value: string) => setSelectedOs(value)}
            {...props}
          />
        ))}
      </ItemsContainer>
    </TemplateCard>
  )
}
