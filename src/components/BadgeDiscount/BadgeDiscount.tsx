'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import { BadgeDiscountProps } from './types'
import { BadgeDiscountSxProps } from './constants'

export const BadgeDiscount: FC<BadgeDiscountProps> = ({
  value,
  size = 'medium',
}) => (
  <Box
    bgcolor="success.main"
    color="common.white"
    borderRadius={1}
    textTransform="uppercase"
    component="span"
    display="inline-flex"
    sx={BadgeDiscountSxProps[size]}
    alignItems="center"
    justifyContent="center"
    aria-label="Product with discount"
  >
    {value && `-${value}%`}
  </Box>
)
