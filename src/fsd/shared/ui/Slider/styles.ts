import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    fade: { height: '100%' },
    slider: {
      '&, & .slick-list, & .slick-track, & .slick-slide, & .slick-slide > div, & .slick-slide > div > div':
        {
          height: '100%',
        },
      '& .slick-slide.:not(.slick-cloned)': {
        mr: 3,
      },
      '.slick-track .slick-active:first-of-type': {
        background: 'red',
      },
    },
    sliderWrapper: { position: 'relative' },
  })
