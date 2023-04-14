import { Stack, styled } from '@mui/material'

import { TemplateCard } from 'views/vm-template-page/TemplateCard'

export const StyledTemplateCard = styled(TemplateCard)(({ theme }) => ({
  padding: theme.spacing(2, 2, 8, 2),
}))

export const Column = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
}))
