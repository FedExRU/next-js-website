'use client'

import { Grid } from '@mui/material'

import { Slider } from '../../../../shared/ui'
import { useGetMainSliderItemsQuery } from '../../model'
import { MainSliderItem } from './mainSliderItem'

export const MainSlider = () => {
  const { data, isLoading } = useGetMainSliderItemsQuery()

  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Slider autoplay isLoading={isLoading} withArrows withBackdrop withDots>
          {data?.items?.map(({ id, ...rest }) => (
            <MainSliderItem id={id} key={id} {...rest} />
          ))}
        </Slider>
      </Grid>
    </Grid>
  )
}
