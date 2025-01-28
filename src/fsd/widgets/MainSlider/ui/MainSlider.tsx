'use client'

import { MainSliderItem, useGetMainSliderItemsQuery } from '@fsd/entities'
import { Slider } from '@fsd/shared'
import { Box, Grid2 as Grid } from '@mui/material'

export const MainSlider = () => {
  const { data, isLoading } = useGetMainSliderItemsQuery()

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Slider isLoading={isLoading}>
            {data?.items?.map(({ id, ...rest }) => (
              <MainSliderItem id={id} key={id} {...rest} />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  )
}
