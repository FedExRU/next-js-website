'use client'

import {
  Box,
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'

import { getStyles } from './styles'
import { TypographyProps } from './types'
import { makeGetSx } from './utils'

export const Typography: React.FC<TypographyProps> = ({
  children,
  icon,
  sx: sxProp,
  variant: variantProp,
  ...rest
}) => {
  let sx = sxProp
  let variant: MuiTypographyProps['variant']

  let iconStyles = {} as ReturnType<typeof getStyles>

  if (typeof variantProp === 'string') {
    variant = variantProp
  } else if (typeof variantProp === 'object') {
    sx = makeGetSx({ sx, variant: variantProp })
  }

  if (icon) {
    iconStyles = getStyles()
  }

  return (
    <MuiTypography {...rest} sx={sx} variant={variant}>
      {icon && iconStyles ? (
        <Box component="span" sx={iconStyles.styles.iconRoot}>
          <Box component="span" sx={iconStyles.styles.icon}>
            {icon}
          </Box>
          <Box component="span" sx={iconStyles.styles.iconText}>
            {children}
          </Box>
        </Box>
      ) : (
        children
      )}
    </MuiTypography>
  )
}
