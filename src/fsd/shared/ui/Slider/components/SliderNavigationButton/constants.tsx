import { IconButtonProps, SvgIconProps } from '@mui/material'
import { FC } from 'react'
import { ArrowLeftMediumIcon, ArrowRightMediumIcon } from '../../../Icons'

export const SliderNavigationVariant = {
  prev: 'prev',
  next: 'next',
} as const

export const VARIANT_ICON_MAP: Record<
  keyof typeof SliderNavigationVariant,
  FC<SvgIconProps>
> = {
  [SliderNavigationVariant.prev]: ArrowLeftMediumIcon,
  [SliderNavigationVariant.next]: ArrowRightMediumIcon,
}

export const VARIANT_STYLE_MAP: Record<
  keyof typeof SliderNavigationVariant,
  IconButtonProps['sx']
> = {
  [SliderNavigationVariant.prev]: {
    ml: 4,
  },
  [SliderNavigationVariant.next]: {
    right: 0,
    mr: 4,
  },
}

export const ARIA_LABEL_BY_VARIANT: Record<
  keyof typeof SliderNavigationVariant,
  string
> = {
  [SliderNavigationVariant.prev]: 'Go to previous slide',
  [SliderNavigationVariant.next]: 'Go to next slide',
}
