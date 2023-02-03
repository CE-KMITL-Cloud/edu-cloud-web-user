import { styled } from '@mui/material'
import { type CSSProperties } from 'react'
import { ReactSVG } from 'react-svg'

import { useSmartSize } from 'hooks/useSmartSize'

type StyledSVGProps = {
  isFill?: boolean
  isStroke?: boolean
  color?: string
}

const StyledSVG = styled(ReactSVG, {
  shouldForwardProp: (props: string) => !['isFill', 'isStroke', 'color', 'height', 'width'].includes(props),
})<StyledSVGProps>(({ isFill, isStroke, color }) => ({
  svg: {
    stroke: isStroke && (color ?? 'currentColor'),
    fill: isFill && (color ?? 'currentColor'),
    path: {
      stroke: isStroke && (color ?? 'currentColor'),
      fill: isFill && (color ?? 'currentColor'),
    },
    width: '100%',
    height: '100%',
    transition: 'all 0.4s ease',
    transitionProperty: ['stroke', 'fill'].join(','),
  },
}))

type Props = {
  src: string
  color?: string
  width?: number
  height?: number
  fill?: boolean
  stroke?: boolean
  className?: string
  display?: CSSProperties['display']
  marginLeft?: CSSProperties['marginLeft']
  marginRight?: CSSProperties['marginRight']
}

/**
 * @param src Src of svg file
 * @param color Color HEX code start with #
 * @param width Width of image
 * @param height Height of image
 * @param fill Svg using fill props for color
 * @param stroke Svg using fill props for color
 * @param className class of svg
 */
export const CoreSvg = ({
  src,
  color,
  height: heightProps,
  width: widthProps,
  fill,
  stroke,
  className,
  display,
  marginLeft,
  marginRight,
}: Props) => {
  const { width, height } = useSmartSize(widthProps, heightProps)

  return (
    <StyledSVG
      className={className}
      src={src}
      color={color}
      isFill={fill}
      isStroke={stroke}
      sx={{
        div: {
          width,
          height,
          minWidth: width,
          minHeight: height,
          display: 'flex',
        },
        display,
        marginLeft,
        marginRight,
      }}
    />
  )
}
