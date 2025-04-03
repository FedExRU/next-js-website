import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    slider: {
      '&, & .slick-list, & .slick-track, & .slick-slide, & .slick-slide > div, & .slick-slide > div > div':
        {
          height: '100%',
        },
    },
  })
