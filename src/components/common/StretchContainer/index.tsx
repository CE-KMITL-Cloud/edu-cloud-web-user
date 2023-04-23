import { Container } from '@mui/material'
import { ReactNode } from 'react'

import { useSettings } from 'hooks/useSettings'

interface StretchContainerProps {
  children: ReactNode
}

export const StretchContainer = ({ children }: StretchContainerProps) => {
  const { stretch } = useSettings()

  return <Container maxWidth={stretch ? false : 'xl'}>{children}</Container>
}
