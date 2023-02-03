import { Box, Fade, Tooltip as MuiTooltip, Typography } from '@mui/material'
import { ReactNode } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

type TooltipProps = {
  title?: ReactNode
  size?: number
  closeDurationAfterTouchMs?: number
}

export const Tooltip = ({ title, size = 24, closeDurationAfterTouchMs = 3000 }: TooltipProps) => {
  return (
    <MuiTooltip
      title={
        <Typography variant="body2" whiteSpace="pre-wrap">
          {title}
        </Typography>
      }
      placement={'top-end'}
      enterTouchDelay={0}
      leaveTouchDelay={closeDurationAfterTouchMs}
      arrow
      TransitionComponent={Fade}
    >
      <Box display="flex" alignItems="center">
        <CoreSvg src="/static/icons/info.svg" height={size} width={size} />
      </Box>
    </MuiTooltip>
  )
}
