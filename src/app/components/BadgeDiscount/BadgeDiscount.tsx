'use client'

import Box from '@mui/material/Box'
import { FC } from 'react'

import { BadgeDiscountSxProps } from './constants'
import { BadgeDiscountProps } from './types'

export const BadgeDiscount: FC<BadgeDiscountProps> = ({
  size = 'medium',
  value,
}) => (
  <Box
    alignItems="center"
    aria-label="Product with discount"
    bgcolor="success.main"
    borderRadius={1}
    color="common.white"
    component="span"
    display="inline-flex"
    justifyContent="center"
    sx={BadgeDiscountSxProps[size]}
    textTransform="uppercase"
  >
    {value && `-${value}%`}
  </Box>
)
