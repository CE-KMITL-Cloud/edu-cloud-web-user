import { SvgIcon, Tooltip } from '@mui/material'
import Settings03Icon from '@untitled-ui/icons-react/build/esm/Settings03'

import { ContentsWrapper, StyledButton } from './styled'

interface SettingsButtonProps {
  onClick?: () => void
}

export const SettingsButton = ({ onClick }: SettingsButtonProps) => (
  <Tooltip title="Settings">
    <ContentsWrapper onClick={onClick}>
      <StyledButton>
        <SvgIcon>
          <Settings03Icon />
        </SvgIcon>
      </StyledButton>
    </ContentsWrapper>
  </Tooltip>
)
