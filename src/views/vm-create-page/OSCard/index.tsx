import { useCallback, useEffect, useState } from 'react'

import { accessApi } from 'api/backend/service/access'
import { clusterApi } from 'api/backend/service/cluster'

import { OSBox } from 'components/common/OSBox'

import { osMockData } from 'mock/os-data'

import { Os } from 'types/enums'

import { TemplateCard } from 'views/vm-create-page/TemplateCard'

import { OSBoxContainer } from './styled'

const useOsStore = () => {
  const [state, setState] = useState<string[]>([])
  const handleOsGet = useCallback(async () => {
    try {
      //////////////////////////////////////////////////////////////////////
      // ! mock ticket
      const ticket = await accessApi.fetchTicket('teacher2', 'teacher2')
      console.log(ticket)
      //////////////////////////////////////////////////////////////////////
      const response = await clusterApi.fetchOs()
      setState(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    handleOsGet()
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  return {
    os: state,
  }
}

export const OSCard = () => {
  const { os } = useOsStore()
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
