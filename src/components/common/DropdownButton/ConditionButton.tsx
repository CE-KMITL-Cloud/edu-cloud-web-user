import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ReactNode, forwardRef } from 'react'

import { IconWrapper, StyledIconButton } from './styled'

interface ButtonProps {
  children?: ReactNode
  backgroundColor?: string
  onOpen: () => void
  onClose: () => void
}

const ClickButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onOpen, backgroundColor }: ButtonProps, ref) => {
    return (
      <StyledIconButton onClick={onOpen} ref={ref} bgColor={backgroundColor}>
        <div>{children}</div>
        <IconWrapper>
          <KeyboardArrowDownIcon color="inherit" />
        </IconWrapper>
      </StyledIconButton>
    )
  },
)

// TODO: implement this
// const HoverButton = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ children, onOpen, onClose, backgroundColor }: ButtonProps, ref) => {
//     return (
//       <StyledIconButton ref={ref} bgColor={backgroundColor}>
//         <div>{children}</div>
//         <IconWrapper>
//           <KeyboardArrowDownIcon color="inherit" />
//         </IconWrapper>
//       </StyledIconButton>
//     )
//   },
// )

export interface ConditionButtonProps extends ButtonProps {
  type: 'click' /* | 'hover' */
}

export const ConditionButton = forwardRef<HTMLButtonElement, ConditionButtonProps>(
  ({ type, ...buttonProps }: ConditionButtonProps, ref) => {
    switch (type) {
      case 'click':
        return <ClickButton ref={ref} {...buttonProps} />
      // case 'hover':
      //   return <HoverButton ref={ref} {...buttonProps} />
    }
  },
)
