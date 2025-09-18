'use client'

import Box from '@mui/material/Box'
import { FC } from 'react'

import { getStyles } from './styles'
import { BadgeNewProps } from './types'

const { styles } = getStyles()

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
    sx={styles[size]}
    textTransform="uppercase"
  >
    {caption}
  </Box>
)
