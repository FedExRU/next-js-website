import { COLUMN_OFFSET, SWIPER_SCROLLBAR_HEIGHT } from './constants'
import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    title: {
      maxWidth: 149,
      mt: { xs: 0, sm: 1 },
      mb: { xs: COLUMN_OFFSET.MOBILE, sm: COLUMN_OFFSET.DESKTOP },
    },
    sliderWrapper: theme => ({
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
      mt: { xs: COLUMN_OFFSET.MOBILE, sm: 0 },
      pb: { xs: COLUMN_OFFSET.MOBILE_2, sm: COLUMN_OFFSET.DESKTOP },
      display: 'flex',
      alignItems: 'end',
      height: '100%',
    },
  })
