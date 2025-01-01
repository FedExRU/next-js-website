'use client'

import { Box, Grid2 as Grid } from '@mui/material'
import { Autoplay, Scrollbar, Grid as SwiperGrid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSlidesCount } from '../lib/hooks'
import { SliderSkeleton } from './components'
import { getStyles } from './styles'
import { Product, useGetNewProductsQuery } from '@fsd/entities'
import 'swiper/css'
import { ActionLink, SLIDER_AUTOPLAY_DELAY, Typography } from '@fsd/shared'
import { AddToCart, AddToFavorites } from '@fsd/features'

const { styles } = getStyles()

export const NewArrivals = () => {
  const { data, isLoading } = useGetNewProductsQuery()
  const slidesCount = useSlidesCount()

  const handleRenderAction = () => <AddToCart />

  const handleRenderActionSecondary = (isFavorite?: boolean) => (
    <AddToFavorites isAdded={isFavorite} />
  )

  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 'grow' }} order={1}>
        <Typography variant={{ xs: 'h5', sm: 'h4' }} sx={styles.title}>
          New Arrivals
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 'auto' }} order={{ xs: 3, sm: 2 }}>
        <Box sx={styles.actionLinkWrapper}>
          <ActionLink text="More Products" />
        </Box>
      </Grid>
      <Grid size={12} order={{ xs: 2, sm: 3 }}>
        <Box sx={styles.sliderWrapper}>
          {isLoading ? (
            <SliderSkeleton spaceBetween={24} slidesPerView={slidesCount}>
              {Array.from({ length: slidesCount }).map((_, id) => (
                <Product key={id} layout="secondary" skeleton />
              ))}
            </SliderSkeleton>
          ) : (
            <Swiper
              autoplay={{
                delay: SLIDER_AUTOPLAY_DELAY,
                pauseOnMouseEnter: true,
              }}
              scrollbar={{
                hide: false,
              }}
              spaceBetween={24}
              height={100}
              modules={[SwiperGrid, Autoplay, Scrollbar]}
              slidesPerView={slidesCount}
            >
              {data?.items?.map(({ id, ...rest }) => (
                <SwiperSlide style={{ height: 'auto' }} key={id}>
                  <Product
                    id={id}
                    {...rest}
                    isFavorite={id === 1}
                    layout="secondary"
                    renderAction={handleRenderAction}
                    renderActionSecondary={handleRenderActionSecondary}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}
