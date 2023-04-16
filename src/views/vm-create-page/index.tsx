import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { instancesApi } from 'api/backend/service/instance'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { paths } from 'routes/paths'

import { CreateInstance } from 'types/instance'
import { Page } from 'types/page'

import { HostnameCard } from 'views/vm-create-page/HostnameCard'
import { OSCard } from 'views/vm-create-page/OSCard'
import { StarterCard } from 'views/vm-create-page/StarterCard'
import { SummaryCard } from 'views/vm-create-page/SummaryCard'

import { Aside, Contents, Section } from './styled'

export const VMCreatePage: Page = () => {
  const [hostname, setHostname] = useState('')
  const [warning, setWarning] = useState<string | null>(null)
  const [navigate, setNavigate] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleHostnameChange = (newHostname: string) => {
    setHostname(newHostname)
  }

  const handleCreatePool = async (instance: CreateInstance) => {
    try {
      setLoading(true)
      // todo : replace sender
      const response = await instancesApi.createInstance(instance, 'teacher1')
      if (!response.success) {
        console.log(response)
        setWarning('Warning: API call is unsuccessful.')
        setNavigate(false)
      } else {
        setWarning(null)
        setNavigate(true)
      }
    } catch (error) {
      setWarning('Warning: An error occurred during the API call.')
      setNavigate(false)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (navigate) {
      router.push(paths.vmInstance)
    }
  }, [navigate])

  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Create VM</HeaderBar>
      <Contents>
        <Section>
          <OSCard />
          <StarterCard />
          <HostnameCard onHostnameChange={handleHostnameChange} />
        </Section>
        <Aside>
          <SummaryCard hostname={hostname} cpu={0} ram={0} disk={0} cdrom="" storage="" />
          {warning && (
            <div>
              <p style={{ color: 'red' }}>{warning}</p>
            </div>
          )}
            <Button
              variant="contained"
              color="success"
              size="medium"
              onClick={() => {
                handleCreatePool({
                  name: 'demo-01',
                  cdrom: 'ubuntu-20.04.4-live-server-amd64.iso',
                  cores: 2,
                  disk: '2',
                  memory: 2024,
                  storage: 'ceph-vm',
                })
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Create instance'}
            </Button>
        </Aside>
      </Contents>
    </>
  )
}

VMCreatePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
