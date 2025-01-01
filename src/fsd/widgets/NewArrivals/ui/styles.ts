import { SWIPER_SCROLLBAR_HEIGHT } from './constants'
import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    title: {
      maxWidth: 149,
    },
    sliderWrapper: theme => ({
      mt: 5,
      mb: {
        xs: 5,
        sm: 0,
      },
      '& .swiper-scrollbar': {
        height: SWIPER_SCROLLBAR_HEIGHT,
        background: theme.palette.grey[300],
      },
      '& .swiper-scrollbar .swiper-scrollbar-drag': {
        height: SWIPER_SCROLLBAR_HEIGHT,
        background: theme.palette.grey[500],
      },
    }),
    actionLinkWrapper: {
      display: 'flex',
      alignItems: 'end',
      height: '100%',
    },
  })
