import { createSxStyles } from '@fsd/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ withBackdrop }: GetStylesProps) =>
  createSxStyles({
    sliderWrapper: {
      backgroundColor: withBackdrop ? 'grey.200' : 'transparent',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    wrapper: { position: 'relative' },
  })
