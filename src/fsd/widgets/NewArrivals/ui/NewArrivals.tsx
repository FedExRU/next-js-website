'use client'

import { Box } from '@mui/material'
import { Autoplay, Scrollbar, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSlidesCount } from '../lib/hooks'
import { SWIPER_SCROLLBAR_HEIGHT } from './constants'
import { SliderSkeleton } from './components'
import { Product, useGetNewProductsQuery } from '@fsd/entities'
import 'swiper/css'
import { SLDIER_AUTOPLAY_DELAY } from '@fsd/shared'

export const NewArrivals = () => {
  const { data, isLoading } = useGetNewProductsQuery()
  const slidesCount = useSlidesCount()

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
        <SliderSkeleton spaceBetween={24}>
          {Array.from({ length: slidesCount }).map((_, id) => (
            <Product key={id} layout="secondary" skeleton />
          ))}
        </SliderSkeleton>
      ) : (
        <Swiper
          autoplay={{
            delay: SLDIER_AUTOPLAY_DELAY,
          }}
          scrollbar={{
            hide: false,
          }}
          spaceBetween={24}
          modules={[Grid, Autoplay, Scrollbar]}
          slidesPerView={slidesCount}
        >
          {data?.items?.map(({ id, ...rest }) => (
            <SwiperSlide style={{ height: 'auto' }} key={id}>
              <Product id={id} {...rest} layout="secondary" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  )
}
