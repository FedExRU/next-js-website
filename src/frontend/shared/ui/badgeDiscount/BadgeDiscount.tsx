'use client'

import Box from '@mui/material/Box'
import { FC } from 'react'

import { getStyles } from './styles'
import { BadgeDiscountProps } from './types'

const { styles } = getStyles()

export const BadgeDiscount: FC<BadgeDiscountProps> = ({
  size = 'medium',
  value,
}) =>
  value ? (
    <Box
      alignItems="center"
      aria-label="Product with discount"
      bgcolor="success.main"
      borderRadius={1}
      color="common.white"
      component="span"
      display="inline-flex"
      justifyContent="center"
      sx={styles[size]}
      textTransform="uppercase"
    >
      -${value}%
    </Box>
  ) : null
