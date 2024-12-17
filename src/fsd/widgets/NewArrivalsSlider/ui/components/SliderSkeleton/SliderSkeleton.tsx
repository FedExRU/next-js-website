import { Grid2 as Grid } from '@mui/material'
import { FC, PropsWithChildren, Children as ReactChildren } from 'react'
import { SliderSkeletonProps } from './types'

export const SliderSkeleton: FC<PropsWithChildren<SliderSkeletonProps>> = ({
  spaceBetween = 0,
  children,
}) => {
  const spacing = spaceBetween / 8

  return (
    <Grid container spacing={spacing}>
      {ReactChildren.map(children, (child, index) => (
        <Grid key={index} size={3}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
