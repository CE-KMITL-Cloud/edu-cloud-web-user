import { Typography } from '@mui/material'

import { Icon } from 'components/common/ToggleSwitch/Icon'

import { Item, Root, VerticalDivider } from './styled'

type ItemProperty<T extends string> = {
  id: T
  iconSrc?: string
  label?: string
  onClick?: () => void
}

export interface ToggleSwitchProps<F extends string, S extends string> {
  state: F | S
  firstItemProperty: ItemProperty<F>
  secondItemProperty: ItemProperty<S>
  width?: number
}

export const ToggleSwitch = <T extends string = 'FIRST', S extends string = 'SECOND'>({
  state,
  firstItemProperty: first,
  secondItemProperty: second,
  width,
}: ToggleSwitchProps<T, S>) => {
  return (
    <Root width={width}>
      <Item glow={state === first.id} onClick={first.onClick}>
        <Icon src={first.iconSrc} />
        <Typography variant="body1" color="inherit" fontWeight="inherit">
          {first.label}
        </Typography>
      </Item>
      <VerticalDivider />
      <Item glow={state === second.id} onClick={second.onClick}>
        <Icon src={second.iconSrc} />
        <Typography variant="body1" color="inherit" fontWeight="inherit">
          {second.label}
        </Typography>
      </Item>
    </Root>
  )
}
