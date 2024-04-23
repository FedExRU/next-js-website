'use client'

import { Skeleton as MuiSkeleton } from '@mui/material'
import { FC } from 'react'
import { SkeletonProps } from './types'

export const Skeleton: FC<SkeletonProps> = ({ sx, ...rest }) => (
  <MuiSkeleton
    sx={{
      ...sx,
      transform: 'none',
    }}
    {...rest}
  />
)
