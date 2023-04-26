import { Container } from '@mui/material'
import { ReactNode } from 'react'

import { useSettings } from 'hooks/useSettings'

interface StretchContainerProps {
  children: ReactNode
  className?: string
}

export const StretchContainer = ({ children, className }: StretchContainerProps) => {
  const { stretch } = useSettings()

  return (
    <Container className={className} maxWidth={stretch ? false : 'xl'}>
      {children}
    </Container>
  )
}
