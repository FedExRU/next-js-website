'use client'

import { Box } from '@mui/material'
import { Product, useGetFeaturedProductsQuery } from '@fsd/entities'
import { Slider } from '@fsd/shared'

export const FeaturedProductsSlider = () => {
  const { data, isLoading } = useGetFeaturedProductsQuery()

  return (
    <Box>
      <Slider isLoading={isLoading}>
        {data?.items?.map(({ id, ...rest }) => (
          <Product key={id} id={id} {...rest} />
        ))}
      </Slider>
    </Box>
  )
}
