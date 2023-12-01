'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import { BadgeDiscountProps } from './types'
import { BadgeDiscountSxProps } from './constants'

const BadgeDiscount: FC<BadgeDiscountProps> = ({ value, size = 'medium' }) => (
  <Box
    bgcolor="success"
    borderRadius={1}
    textTransform="uppercase"
    component="span"
    display="inline-flex"
    sx={BadgeDiscountSxProps[size]}
  >
    {value}
  </Box>
)

export default BadgeDiscount
