import { IconButton, MenuItem, SvgIcon, alpha, styled } from '@mui/material'

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (props: string) => !['bgColor'].includes(props),
})<{ bgColor?: string }>(({ bgColor, theme }) => {
  const backgroundColor = bgColor ?? theme.palette.info.main
  return {
    backgroundColor: backgroundColor,
    color: theme.palette.common.white,
    borderRadius: 8,
    padding: theme.spacing(0.75, 1),
    '&:hover': {
      backgroundColor: alpha(backgroundColor, 0.8),
    },
  }
})

export const IconWrapper = styled(SvgIcon)(() => ({
  fontSize: 16,
  paddingLeft: 2,
}))

export const PopoverContentWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.8),
  },
}))
