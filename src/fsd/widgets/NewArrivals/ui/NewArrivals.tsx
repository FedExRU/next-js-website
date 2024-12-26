'use client'

import { Box } from '@mui/material'
import { Autoplay, Scrollbar, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSlidesCount } from '../lib/hooks'
import { SWIPER_SCROLLBAR_HEIGHT } from './constants'
import { SliderSkeleton } from './components'
import { Product, useGetNewProductsQuery } from '@fsd/entities'
import 'swiper/css'
import { SLIDER_AUTOPLAY_DELAY } from '@fsd/shared'
import { AddToCart, AddToFavorites } from '@fsd/features'

export const NewArrivals = () => {
  const { data, isLoading } = useGetNewProductsQuery()
  const slidesCount = useSlidesCount()

  const handleRenderAction = () => <AddToCart />

  const handleRenderActionSecondary = (isFavorite?: boolean) => (
    <AddToFavorites isAdded={isFavorite} />
  )

  return (
    <Box
      sx={theme => ({
        '& .swiper-scrollbar': {
          height: SWIPER_SCROLLBAR_HEIGHT,
          background: theme.palette.grey[300],
        },
        '& .swiper-scrollbar .swiper-scrollbar-drag': {
          height: SWIPER_SCROLLBAR_HEIGHT,
          background: theme.palette.grey[500],
        },
      })}
    >
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
          }}
          scrollbar={{
            hide: false,
          }}
          spaceBetween={24}
          height={100}
          modules={[Grid, Autoplay, Scrollbar]}
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
  )
}
