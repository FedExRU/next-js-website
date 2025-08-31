'use client'

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'

import { TypographyProps } from './types'
import { makeGetSx } from './utils'

export const Typography: React.FC<TypographyProps> = ({
  sx: sxProp,
  variant: variantProp,
  ...rest
}) => {
  let sx = sxProp
  let variant: MuiTypographyProps['variant']

  if (typeof variantProp === 'string') {
    variant = variantProp
  } else if (typeof variantProp === 'object') {
    sx = makeGetSx({ sx, variant: variantProp })
  }

  return <MuiTypography {...rest} sx={sx} variant={variant} />
}
