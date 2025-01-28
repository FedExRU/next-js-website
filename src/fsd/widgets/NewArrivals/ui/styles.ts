import { createSxStyles } from '@fsd/shared'

import { SWIPER_SCROLLBAR_HEIGHT } from './constants'

export const getStyles = () =>
  createSxStyles({
    actionLinkWrapper: {
      alignItems: 'end',
      display: 'flex',
      height: '100%',
    },
    sliderWrapper: theme => ({
      '& .swiper-scrollbar': {
        background: theme.palette.grey[300],
        height: SWIPER_SCROLLBAR_HEIGHT,
      },
      '& .swiper-scrollbar .swiper-scrollbar-drag': {
        background: theme.palette.grey[500],
        height: SWIPER_SCROLLBAR_HEIGHT,
      },
      mb: {
        sm: 0,
        xs: 5,
      },
      mt: 5,
    }),
    title: {
      maxWidth: 149,
    },
  })
