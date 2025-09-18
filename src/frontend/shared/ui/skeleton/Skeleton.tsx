'use client'

import { Skeleton as MuiSkeleton } from '@mui/material'

import { SkeletonProps } from './types'

export const Skeleton: React.FC<SkeletonProps> = ({ sx, ...rest }) => (
  <MuiSkeleton
    sx={{
      ...sx,
      transform: 'none',
    }}
    {...rest}
  />
)
