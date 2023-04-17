import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { accessApi } from 'api/backend/service/access'
import { templatesApi } from 'api/backend/service/template'

import { MainLayout } from 'layouts/MainLayout'

import { HeaderBar } from 'components/common/HeaderBar'

import { withAuthGuard } from 'components/hocs/with-auth-guard'

import { Instance } from 'types/instance'
import { Page } from 'types/page'

import { TemplateTable } from 'views/template-page/TemplateTable'

import { Header } from './Header'
import { Background, ScreenFlex, StyledPaper } from './styled'

const useTemplatesStore = () => {
  const [state, setState] = useState<Instance[]>([])
  const router = useRouter()
  const handleTemplatesGet = useCallback(async () => {
    try {
      //////////////////////////////////////////////////////////////////////
      // ! mock ticket
      const ticket = await accessApi.fetchTicket('teacher2', 'teacher2')
      console.log(ticket)
      //////////////////////////////////////////////////////////////////////
      const response = await templatesApi.fetchTemplates('teacher2')
      setState(response)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    handleTemplatesGet()
    const intervalId = setInterval(() => {
      handleTemplatesGet()
    }, 60000)

    return () => {
      clearInterval(intervalId) // Clears the interval when the component is unmounted
    }
  }, [router.asPath])

  useEffect(() => {
    console.log(state)
  }, [state])

  return {
    templates: state,
  }
}

export const TemplatePage: Page = withAuthGuard(() => {
  const [selectedTemplate, setSelectedTemplate] = useState<Instance | null>(null)
  const { templates } = useTemplatesStore()
  return (
    <>
      <HeaderBar iconSrc="/static/icons/server-black.png">Template</HeaderBar>
      <Background>
        <StyledPaper>
          <Box pb={4}>
            <Header />
          </Box>
          <TemplateTable templates={templates} onTemplateSelect={setSelectedTemplate} />
        </StyledPaper>
      </Background>
    </>
  )
})

TemplatePage.getLayout = (page) => (
  <MainLayout>
    <ScreenFlex>{page}</ScreenFlex>
  </MainLayout>
)
