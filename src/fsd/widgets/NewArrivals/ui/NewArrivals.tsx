'use client'

import { Product, useGetNewProductsQuery } from '@fsd/entities'
import { AddToCart, AddToFavorites } from '@fsd/features'
import { ActionLink, Slider, Typography } from '@fsd/shared'
import { Box, Grid } from '@mui/material'

import { useSlidesCount } from '../lib/hooks'
import { SliderSkeleton } from './components'
import { getStyles } from './styles'

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
          <ActionLink text="More Products" />
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

// export const NewArrivals = () => {
//   const { data, isLoading } = useGetNewProductsQuery()
//   const slidesCount = useSlidesCount()

//   const handleRenderAction = () => <AddToCart />

//   const handleRenderActionSecondary = (isFavorite?: boolean) => (
//     <AddToFavorites isAdded={isFavorite} />
//   )

//   return (
//     <Grid container>
//       <Grid order={1} size={{ sm: 'grow', xs: 12 }}>
//         <Typography
//           component="h2"
//           sx={styles.title}
//           variant={{ sm: 'h4', xs: 'h5' }}
//         >
//           New Arrivals
//         </Typography>
//       </Grid>
//       <Grid order={{ sm: 2, xs: 3 }} size={{ sm: 'auto', xs: 12 }}>
//         <Box sx={styles.actionLinkWrapper}>
//           <ActionLink text="More Products" />
//         </Box>
//       </Grid>
//       <Grid order={{ sm: 3, xs: 2 }} size={12}>
//         <Box sx={styles.sliderWrapper}>
//           {isLoading ? (
//             <SliderSkeleton slidesPerView={slidesCount} spaceBetween={24}>
//               {Array.from({ length: slidesCount }).map((_, id) => (
//                 <Product key={id} layout="secondary" skeleton />
//               ))}
//             </SliderSkeleton>
//           ) : (
//             <Swiper
//               autoplay={{
//                 delay: SLIDER_AUTOPLAY_DELAY,
//                 pauseOnMouseEnter: true,
//               }}
//               height={100}
//               modules={[SwiperGrid, Autoplay, Scrollbar]}
//               scrollbar={{
//                 hide: false,
//               }}
//               slidesPerView={slidesCount}
//               spaceBetween={24}
//             >
//               {data?.items?.map(({ id, ...rest }) => (
//                 <SwiperSlide key={id} style={{ height: 'auto' }}>
//                   <Product
//                     id={id}
//                     {...rest}
//                     isFavorite={id === 1}
//                     layout="secondary"
//                     renderAction={handleRenderAction}
//                     renderActionSecondary={handleRenderActionSecondary}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   )
// }
