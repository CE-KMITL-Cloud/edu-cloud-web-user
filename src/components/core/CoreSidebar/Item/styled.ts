import { styled } from '@mui/material'

export const StartIconWrapper = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  height: 20,
  justifyContent: 'center',
  width: 20,
}))

export const StartIconInner = styled('div', { shouldForwardProp: (props: string) => !['active'].includes(props) })<{
  active?: boolean
}>(({ active = false }) => ({
  backgroundColor: 'var(--nav-item-icon-color)',
  borderRadius: '50%',
  height: 4,
  opacity: 0, // remove this if you want it to be visible
  width: 4,
  ...(active && {
    backgroundColor: 'var(--nav-item-icon-active-color)',
    height: 6,
    opacity: 1,
    width: 6,
  }),
}))
