import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { clusterApi } from 'api/backend/service/cluster'
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

import { StorageCard } from './StorageCard'
import { Aside, Contents, Section } from './styled'

export const VMCreatePage: Page = () => {
  const [hostname, setHostname] = useState('')
  const [warning, setWarning] = useState<string | null>(null)
  const [navigate, setNavigate] = useState(false)
  const [loading, setLoading] = useState(false)

  const [spec, setSpec] = useState<number[]>([])

  const router = useRouter()

  const [storages, setStorages] = useState<string[]>([])
  const [selectedStorage, setSelectedStorage] = useState<string>('')

  const handleStorageOptionSelect = (value: string) => {
    setSelectedStorage(value)
  }

  const fetchStorages = useCallback(async () => {
    try {
      const response = await clusterApi.fetchStorages()
      setStorages(response)
      // Transform the data to an array of strings if necessary.
      // This depends on the response format from your API.
      // Update this part according to your actual API response.
    } catch (error) {
      // Handle the error here, e.g., showing an error message or logging the error
      console.error('Error:', error)
      return [] // Return an empty array in case of an error
    }
  }, [])

  useEffect(() => {
    fetchStorages()
  }, [])

  const handleHostnameChange = (newHostname: string) => {
    setHostname(newHostname)
  }

  const handleCreateInstance = async (instance: CreateInstance) => {
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
          <HostnameCard onHostnameChange={handleHostnameChange} />
          <StarterCard onDataChange={(data) => setSpec(data)} defaultIndex={0} />
          <OSCard />
          <StorageCard storages={storages} onStorageOptionSelect={handleStorageOptionSelect} />
        </Section>
        <Aside>
          <SummaryCard
            hostname={hostname}
            cpu={spec[0]}
            ram={spec[1]}
            disk={spec[2]}
            cdrom=""
            storage={selectedStorage}
          />
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
              handleCreateInstance({
                name: 'demo-01',
                cdrom: 'ubuntu-20.04.4-live-server-amd64.iso',
                cores: spec[0],
                disk: `${spec[1]}`,
                memory: spec[2] * 1024,
                storage: selectedStorage,
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
