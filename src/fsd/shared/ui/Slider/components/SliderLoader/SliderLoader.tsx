'use client'

import { Box, BoxProps, CircularProgress } from '@mui/material'
import * as React from 'react'

export const SliderLoader = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref) => (
    <Box
      ref={ref}
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
      {...props}
    >
      <CircularProgress size={60} />
    </Box>
  ),
)

SliderLoader.displayName = 'SliderLoader'
