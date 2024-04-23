import { GetSliderItemImagePropsReturnProps } from './types'

export const getSliderItemImageProps =
  (): GetSliderItemImagePropsReturnProps => ({
    sx: {
      display: 'flex',
      maxHeight: 513,
      minHeight: {
        xs: 304,
        sm: 'auto',
      },
      '& img': {
        position: 'relative !important',
        objectFit: 'cover',
        maxHeight: 513,
        minHeight: {
          xs: 304,
          sm: 'auto',
        },
      },
    },
    width: 0,
    height: 0,
    sizes: '100vw',
    style: { width: '100%', height: 'auto' },
    loading: 'eager',
  })
