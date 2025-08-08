import { createSxStyles } from '@fsd/shared'

import { GetStylesProps } from './types'

export const getStyles = ({ slidesToShowSpacing = 0 }: GetStylesProps) => {
  const calculatedSlidesToShowSpacing = slidesToShowSpacing / 2

  return createSxStyles({
    fade: { height: '100%' },
    slider: {
      '&, & .slick-list, & .slick-track, & .slick-slide, & .slick-slide > div, & .slick-slide > div > div':
        {
          height: '100%',
        },
      '& .slick-list ': {
        ml: -calculatedSlidesToShowSpacing,
        mr: -calculatedSlidesToShowSpacing,
      },
      '& .slick-slide': {
        pl: calculatedSlidesToShowSpacing,
        pr: calculatedSlidesToShowSpacing,
      },
    },
    sliderWrapper: { position: 'relative' },
  })
}
