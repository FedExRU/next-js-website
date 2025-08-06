import { Grid } from '@mui/material'
import * as React from 'react'

import { SliderSkeletonProps } from './types'

export const SliderSkeleton: React.FC<
  React.PropsWithChildren<SliderSkeletonProps>
> = ({ children, slidesPerView = 0, spaceBetween = 0 }) => {
  const spacing = spaceBetween / 8

  return (
    <Grid container justifyContent="space-between" spacing={spacing}>
      {React.Children.map(children, (child, index) => (
        <Grid key={index} size={12 / slidesPerView}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
