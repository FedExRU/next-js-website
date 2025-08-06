'use client'

import { MainSliderItem, useGetMainSliderItemsQuery } from '@fsd/entities'
import { Slider } from '@fsd/shared'
import { Grid } from '@mui/material'

export const MainSlider = () => {
  const { data, isLoading } = useGetMainSliderItemsQuery()

  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Slider autoplay loading={isLoading} withArrows withBackdrop withDots>
          {data?.items?.map(({ id, ...rest }) => (
            <MainSliderItem id={id} key={id} {...rest} />
          ))}
        </Slider>
      </Grid>
    </Grid>
  )
}
