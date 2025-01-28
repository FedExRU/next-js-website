'use client'

import { IconButton } from '@mui/material'
import { FC } from 'react'

import {
  ARIA_LABEL_BY_VARIANT,
  SliderNavigationVariant,
  VARIANT_ICON_MAP,
  VARIANT_STYLE_MAP,
} from './constants'
import { SliderNavigationButtonProps } from './types'

export const SliderNavigationButton: FC<SliderNavigationButtonProps> = ({
  disabled,
  onClick,
  variant = SliderNavigationVariant.next,
}) => {
  const Icon = VARIANT_ICON_MAP[variant]
  const sx = VARIANT_STYLE_MAP[variant]
  const ariaLabel = ARIA_LABEL_BY_VARIANT[variant]

  return (
    <IconButton
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      size="large"
      sx={{
        position: 'absolute',
        top: '50%',
        zIndex: 2,
        ...sx,
        display: { sm: 'inline-flex', xs: 'none' },
      }}
    >
      <Icon />
    </IconButton>
  )
}
