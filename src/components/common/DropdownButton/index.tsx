import { CSSProperties, ReactNode } from 'react'

import { CoreLink } from 'components/core/CoreLink'
import { CorePopover } from 'components/core/CorePopover'

import { usePopover } from 'hooks/usePopover'

import { ConditionButton } from './ConditionButton'
import { DropdownMenuItem } from './DropdownMenuItem'
import { PopoverContentWrapper } from './styled'

type ClickItem = {
  key: string
  label: string
  onClick?: () => void
}

type LinkItem = {
  key: string
  label: string
  link: string
}

export type Item = LinkItem | ClickItem

export const isLinkItem = (item: Item): item is LinkItem => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (item as any)?.link !== undefined && (item as any)?.onClick === undefined
}

export interface DropdownButtonProps {
  items?: Item[]
  children?: ReactNode
  textTransform?: CSSProperties['textTransform']
  backgroundColor?: string
  type?: 'click' /* | 'hover' */
}

export const DropdownButton = ({
  items,
  children,
  textTransform,
  backgroundColor,
  type = 'click',
}: DropdownButtonProps) => {
  const { anchorRef, handleClose, handleOpen, open } = usePopover<HTMLButtonElement>()

  return (
    <div>
      <ConditionButton
        ref={anchorRef}
        onOpen={handleOpen}
        onClose={handleClose}
        type={type}
        backgroundColor={backgroundColor}
      >
        {children}
      </ConditionButton>
      {items && (
        <CorePopover anchorEl={anchorRef.current} onClose={handleClose} open={open}>
          <PopoverContentWrapper>
            {items.map((item: Item) => {
              if (isLinkItem(item))
                return (
                  <CoreLink href={item.link}>
                    <DropdownMenuItem key={item.key} text={item.label} textTransform={textTransform} />
                  </CoreLink>
                )
              return (
                <DropdownMenuItem
                  key={item.key}
                  onClick={item?.onClick}
                  text={item.label}
                  textTransform={textTransform}
                />
              )
            })}
          </PopoverContentWrapper>
        </CorePopover>
      )}
    </div>
  )
}
