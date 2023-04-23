import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { clusterApi } from 'api/backend/app/cluster'
import { instancesApi } from 'api/backend/app/instance'

import { MainLayout } from 'layouts/MainLayout'

import { AlertModal } from 'components/common/AlertModal'
import { HeaderBar } from 'components/common/HeaderBar'
import { StretchContainer } from 'components/common/StretchContainer'

import { paths } from 'routes/paths'

import { accountStore } from 'store/account-store'

import { CreateInstance } from 'types/instance'
import { Page } from 'types/page'

import { HostnameCard } from 'views/vm-create-page/HostnameCard'
import { StarterCard } from 'views/vm-create-page/StarterCard'
import { SummaryCard } from 'views/vm-create-page/SummaryCard'

import { StorageCard } from './StorageCard'
import { TempOsCard } from './TempOsCard'
import { Aside, Contents, Section } from './styled'

export const VMCreatePage: Page = observer(() => {
  const [hostname, setHostname] = useState('')

  const [warning, setWarning] = useState<string | null>(null)
  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [navigate, setNavigate] = useState(false)
  const [loading, setLoading] = useState(false)

  const [spec, setSpec] = useState<number[]>([])

  const router = useRouter()

  const [storages, setStorages] = useState<string[]>([])
  const [os, setOs] = useState<string[]>([])
  const [selectedStorage, setSelectedStorage] = useState<string>('')
  const [selectedOs, setSelectedOs] = useState<string>('')

  const handleStorageOptionSelect = (value: string) => {
    setSelectedStorage(value)
  }

  const handleOsOptionSelect = (value: string) => {
    setSelectedOs(value)
  }

  const fetchStorages = useCallback(async () => {
    try {
      const response = await clusterApi.fetchStorages()
      setStorages(response)
    } catch (error) {
      console.error('Error:', error)
      setStorages([])
    }
  }, [])

  useEffect(() => {
    fetchStorages()
  }, [fetchStorages])

  const fetchOs = useCallback(async () => {
    try {
      const response = await clusterApi.fetchOs()
      setOs(response)
    } catch (error) {
      console.error('Error:', error)
      setOs([])
    }
  }, [])

  useEffect(() => {
    fetchOs()
  }, [fetchOs])

  const handleHostnameChange = (newHostname: string) => {
    setHostname(newHostname)
  }

  const handleCreateInstance = async (instance: CreateInstance) => {
    if (!accountStore.email) return

    try {
      setLoading(true)
      // todo : replace sender
      const response = await instancesApi.createInstance(instance, accountStore.email)
      if (!response.success) {
        console.log(response)
        setWarning('Failed creating VM.')
        setAlertModalOpen(true)
        setNavigate(false)
      } else {
        setWarning(null)
        setNavigate(true)
      }
    } catch (error) {
      setWarning('Failed creating VM.')
      setAlertModalOpen(true)
      setNavigate(false)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (navigate) {
      router.push(paths.vmInstance)
    }
  }, [navigate, router])

  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Create VM</HeaderBar>
      <StretchContainer>
        <Contents>
          <Section>
            <HostnameCard onHostnameChange={handleHostnameChange} />
            <StarterCard onDataChange={(data) => setSpec(data)} defaultIndex={0} />
            {/* <OSCard /> */}
            <TempOsCard os={os} onOsOptionSelect={handleOsOptionSelect} />
            <StorageCard storages={storages} onStorageOptionSelect={handleStorageOptionSelect} />
          </Section>
          <Aside>
            <SummaryCard
              hostname={hostname}
              cpu={spec[0]}
              ram={spec[1]}
              disk={spec[2]}
              cdrom={selectedOs}
              storage={selectedStorage}
            />
            <AlertModal
              open={alertModalOpen}
              title="Error"
              message={warning}
              onClose={() => setAlertModalOpen(false)}
            />
            <Button
              variant="contained"
              color="success"
              size="medium"
              onClick={() => {
                handleCreateInstance({
                  name: hostname,
                  cdrom: selectedOs, // ! please integrate with component
                  cores: spec[0],
                  memory: spec[1] * 1024,
                  disk: `${spec[2]}`,
                  storage: selectedStorage,
                })
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Create instance'}
            </Button>
          </Aside>
        </Contents>
      </StretchContainer>
    </>
  )
})

VMCreatePage.getLayout = (page) => <MainLayout>{page}</MainLayout>
