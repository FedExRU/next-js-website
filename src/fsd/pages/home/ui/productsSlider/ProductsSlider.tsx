'use client'

import { Product, useGetNewProductsQuery } from '@fsd/entities/products'
import { AddToCart, AddToWishlist } from '@fsd/features/products'
import { ActionButtonLink, Slider, Typography } from '@fsd/shared/ui'
import { Box, Grid } from '@mui/material'

import { useSlidesCount } from '../../lib'
import { SliderSkeleton } from './sliderSkeleton'
import { getProductsSliderStyles as getStyles } from './styles'

const { styles } = getStyles()

export const ProductsSlider = () => {
  const { data, isLoading } = useGetNewProductsQuery()
  const slidesCount = useSlidesCount()

  const handleRenderAction = () => <AddToCart />

  const handleRenderActionSecondary = (isFavorite?: boolean) => (
    <AddToWishlist isAdded={isFavorite} />
  )

  return (
    <Grid container>
      <Grid order={1} size={{ sm: 'grow', xs: 12 }}>
        <Typography
          component="h2"
          sx={styles.title}
          variant={{ sm: 'h4', xs: 'h5' }}
        >
          New Arrivals
        </Typography>
      </Grid>
      <Grid order={{ sm: 2, xs: 3 }} size={{ sm: 'auto', xs: 12 }}>
        <Box sx={styles.actionLinkWrapper}>
          <ActionButtonLink text="More Products" />
        </Box>
      </Grid>
      <Grid order={{ sm: 3, xs: 2 }} size={12}>
        <Box sx={styles.sliderWrapper}>
          {isLoading ? (
            <SliderSkeleton slidesPerView={slidesCount} spaceBetween={24}>
              {Array.from({ length: slidesCount }).map((_, id) => (
                <Product key={id} layout="secondary" skeleton />
              ))}
            </SliderSkeleton>
          ) : (
            <Slider autoplay slidesToShow={slidesCount}>
              {data?.items?.map(({ id, ...rest }) => (
                <Product
                  id={id}
                  key={id}
                  {...rest}
                  isFavorite={id === 1}
                  layout="secondary"
                  renderAction={handleRenderAction}
                  renderActionSecondary={handleRenderActionSecondary}
                />
              ))}
            </Slider>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
