import { useCallback, useEffect, useState } from 'react'

import { accessApi } from 'api/backend/service/access'
import { clusterApi } from 'api/backend/service/cluster'

import { OSBox } from 'components/common/OSBox'

import { osMockData } from 'mock/os-data'

import { Os } from 'types/enums'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { OSBoxContainer } from './styled'

export const OSCard = () => {
  
  const [selectedOs, setSelectedOs] = useState<Os | null>(null)

  return (
    <TemplateCard HeaderText="Operation System" glowing={true}>
      <OSBoxContainer>
        {osMockData.map(({ os, ...rest }) => (
          <OSBox key={os} os={os} {...rest} onChange={(value: Os) => setSelectedOs(value)} glow={os === selectedOs} />
        ))}
      </OSBoxContainer>
    </TemplateCard>
  )
}
