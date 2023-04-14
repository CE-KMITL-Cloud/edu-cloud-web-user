import { MouseEvent, useMemo, useState } from 'react'

import { CoreSvg } from 'components/core/CoreSvg'

import { Select } from 'components/common/OSBox/Select'

import { getOsSvg } from 'utils/getOsImage'

import { Os } from 'types/enums'

import { Center, Column, Root, StyledSelectWrapper } from './styled'

export interface OSBoxProps {
  os: Os
  options: string[]
  defaultOption?: string
  glow?: boolean
  onChange?: (value: Os) => void
}

export const OSBox = ({ os, options, defaultOption, glow = false, onChange }: OSBoxProps) => {
  const [option, setOption] = useState<string>(defaultOption ?? options[0])

  const osIconSrc: string = useMemo(() => {
    return getOsSvg(os)
  }, [os])

  const handleClick = (_: MouseEvent<HTMLDivElement>) => {
    onChange?.(os)
  }

  return (
    <Root glow={glow} onClick={handleClick}>
      <Column>
        <Center>
          <CoreSvg src={osIconSrc} width={32} height={32} />
        </Center>
        <StyledSelectWrapper>
          <Select options={options} value={option} onChange={(value) => setOption(value)} />
        </StyledSelectWrapper>
      </Column>
    </Root>
  )
}
