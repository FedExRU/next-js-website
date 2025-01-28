'use client'

import Box from '@mui/material/Box'
import { FC } from 'react'

import { BadgeNewSxProps } from './constants'
import { BadgeNewProps } from './types'

export const BadgeNew: FC<BadgeNewProps> = ({
  caption = 'New',
  size = 'medium',
}) => (
  <Box
    aria-label="New product"
    bgcolor="common.white"
    borderRadius={1}
    component="span"
    display="inline-flex"
    sx={BadgeNewSxProps[size]}
    textTransform="uppercase"
  >
    {caption}
  </Box>
)
