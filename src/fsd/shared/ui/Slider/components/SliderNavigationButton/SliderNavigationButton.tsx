'use client'

import { FC } from 'react'
import { IconButton } from '@mui/material'
import { SliderNavigationButtonProps } from './types'
import {
  SliderNavigationVariant,
  VARIANT_ICON_MAP,
  VARIANT_STYLE_MAP,
  ARIA_LABEL_BY_VARIANT,
} from './constants'

export const SliderNavigationButton: FC<SliderNavigationButtonProps> = ({
  variant = SliderNavigationVariant.next,
  disabled,
  onClick,
}) => {
  const Icon = VARIANT_ICON_MAP[variant]
  const sx = VARIANT_STYLE_MAP[variant]
  const ariaLabel = ARIA_LABEL_BY_VARIANT[variant]

  return (
    <IconButton
      size="large"
      aria-label={ariaLabel}
      sx={{
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        ...sx,
        display: { xs: 'none', sm: 'inline-flex' },
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon />
    </IconButton>
  )
}
