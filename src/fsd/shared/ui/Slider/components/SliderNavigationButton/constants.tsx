import { IconButtonProps, SvgIconProps } from '@mui/material'

import { ArrowLeftMediumIcon, ArrowRightMediumIcon } from '../../../icons'

export const SliderNavigationVariant = {
  next: 'next',
  prev: 'prev',
} as const

export const VARIANT_ICON_MAP: Record<
  keyof typeof SliderNavigationVariant,
  React.FC<SvgIconProps>
> = {
  [SliderNavigationVariant.next]: ArrowRightMediumIcon,
  [SliderNavigationVariant.prev]: ArrowLeftMediumIcon,
}

export const VARIANT_STYLE_MAP: Record<
  keyof typeof SliderNavigationVariant,
  IconButtonProps['sx']
> = {
  [SliderNavigationVariant.next]: {
    mr: 4,
    right: 0,
  },
  [SliderNavigationVariant.prev]: {
    ml: 4,
  },
}

export const ARIA_LABEL_BY_VARIANT: Record<
  keyof typeof SliderNavigationVariant,
  string
> = {
  [SliderNavigationVariant.next]: 'Go to next slide',
  [SliderNavigationVariant.prev]: 'Go to previous slide',
}
