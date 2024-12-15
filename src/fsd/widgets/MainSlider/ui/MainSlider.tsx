'use client'

import { Box, Grid2 as Grid } from '@mui/material'
import { MainSliderItem, useGetMainSliderItemsQuery } from '@fsd/entities'
import { Slider } from '@fsd/shared'

export const MainSlider = () => {
  const { data, isLoading } = useGetMainSliderItemsQuery()

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Slider isLoading={isLoading}>
            {data?.items?.map(({ id, ...rest }) => (
              <MainSliderItem key={id} id={id} {...rest} />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  )
}
