import { Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.grey,
}))

export const StyledBox = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(8, 8, 4, 8),
}))

export const StyledStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  maxWidth: 672,
  width: '100%',
  height: '100%',
}))

export const TextWrapper = styled('article')(() => ({
  alignSelf: 'start',
  width: '100%',
}))

export const ImageContainer = styled('div')(() => ({
  position: 'relative',
}))

export const ImgCon1 = styled(ImageContainer)(() => ({
  alignSelf: 'start',
}))

export const ImgCon2 = styled(ImageContainer)(() => ({
  alignSelf: 'end',
}))
