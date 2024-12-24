import { Grid2 as Grid } from '@mui/material'
import { FC, PropsWithChildren, Children as ReactChildren } from 'react'
import { SliderSkeletonProps } from './types'

export const SliderSkeleton: FC<PropsWithChildren<SliderSkeletonProps>> = ({
  spaceBetween = 0,
  slidesPerView = 0,
  children,
}) => {
  const spacing = spaceBetween / 8

  return (
    <Grid container spacing={spacing} justifyContent="space-between">
      {ReactChildren.map(children, (child, index) => (
        <Grid key={index} size={12 / slidesPerView}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
