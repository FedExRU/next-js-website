'use client'

import { Box, BoxProps, CircularProgress } from '@mui/material'
import { forwardRef } from 'react'

export const SliderLoader = forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ref={ref}
      {...props}
    >
      <CircularProgress size={60} />
    </Box>
  ),
)

SliderLoader.displayName = 'SliderLoader'
