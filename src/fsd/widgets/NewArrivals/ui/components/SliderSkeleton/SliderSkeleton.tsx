import { Grid2 as Grid } from '@mui/material'
import { FC, PropsWithChildren, Children as ReactChildren } from 'react'

import { SliderSkeletonProps } from './types'

export const SliderSkeleton: FC<PropsWithChildren<SliderSkeletonProps>> = ({
  children,
  slidesPerView = 0,
  spaceBetween = 0,
}) => {
  const spacing = spaceBetween / 8

  return (
    <Grid container justifyContent="space-between" spacing={spacing}>
      {ReactChildren.map(children, (child, index) => (
        <Grid key={index} size={12 / slidesPerView}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
