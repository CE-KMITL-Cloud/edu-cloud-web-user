import { styled } from '@mui/material'

import { boxWidth as osBoxWidth } from 'components/common/OSBox/styled'

export const OSBoxContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, ${osBoxWidth}px)`,
  justifyContent: 'space-between',
  width: '100%',
  overflow: 'hidden',
  height: 'auto',
  gap: theme.spacing(2),
}))
