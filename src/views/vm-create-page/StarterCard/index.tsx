import { useEffect, useRef, useState } from 'react'

import { osStarterMockData } from 'mock/os-data'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { OsItemCard } from './Item'
import { ItemsContainer } from './styled'

interface StarterCardProps {
  onDataChange?: (data: number[]) => void
  defaultIndex?: number
}

export const StarterCard = ({ onDataChange, defaultIndex = 0 }: StarterCardProps) => {
  const [selectedOs, setSelectedOs] = useState<string | null>(null) // * id
  const initialSelected = useRef(false)
  const [selectedData, setSelectedData] = useState<number[]>([])

  useEffect(() => {
    if (
      !initialSelected.current &&
      osStarterMockData.length > 0 &&
      defaultIndex >= 0 &&
      defaultIndex < osStarterMockData.length
    ) {
      const defaultOs = osStarterMockData[defaultIndex]
      setSelectedOs(defaultOs.id)
      setSelectedData([defaultOs.spec.vCPUs, defaultOs.spec.RAM, defaultOs.spec.storage])
      onDataChange?.([defaultOs.spec.vCPUs, defaultOs.spec.RAM, defaultOs.spec.storage])
      initialSelected.current = true
    }
  }, [osStarterMockData, defaultIndex, onDataChange])

  return (
    <TemplateCard HeaderText="Starter" glowing={true}>
      <ItemsContainer>
        {osStarterMockData.map(({ id, ...props }) => (
          <OsItemCard
            key={id}
            id={id}
            glow={id === selectedOs}
            onChange={(value: string) => setSelectedOs(value)}
            onSelect={(cpu, mem, disk) => {
              setSelectedData([cpu, mem, disk])
              onDataChange?.([cpu, mem, disk])
            }}
            {...props}
          />
        ))}
      </ItemsContainer>
    </TemplateCard>
  )
}
