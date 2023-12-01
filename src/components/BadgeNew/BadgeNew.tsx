'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import { BadgeNewProps } from './types'
import { BadgeNewSxProps } from './constants'

export const BadgeNew: FC<BadgeNewProps> = ({
  caption = 'New',
  size = 'medium',
}) => (
  <Box
    sx={BadgeNewSxProps[size]}
    bgcolor="common.white"
    borderRadius={1}
    textTransform="uppercase"
    component="span"
    display="inline-flex"
    aria-label="New product"
  >
    {caption}
  </Box>
)
