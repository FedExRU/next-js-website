import { GetSliderItemImagePropsReturnProps } from './types'

export const getSliderItemImageProps =
  (): GetSliderItemImagePropsReturnProps => ({
    height: 0,
    loading: 'eager',
    sizes: '100vw',
    style: { height: 'auto', width: '100%' },
    sx: {
      '& img': {
        maxHeight: 513,
        minHeight: {
          sm: 'auto',
          xs: 304,
        },
        objectFit: 'cover',
        position: 'relative !important',
      },
      display: 'flex',
      maxHeight: 513,
      minHeight: {
        sm: 'auto',
        xs: 304,
      },
    },
    width: 0,
  })
