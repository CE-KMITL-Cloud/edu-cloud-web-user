import { Box, styled } from '@mui/material'

const shouldForwardProp = (props: string) => !['isLinkStyle'].includes(props)
export const InternalLinkContainer = styled(Box, { shouldForwardProp })<{ isLinkStyle?: boolean }>(
  ({ theme, isLinkStyle }) => ({
    cursor: 'pointer',
    display: 'contents',
    color: isLinkStyle ? theme.palette.link : 'unset',
  }),
)
