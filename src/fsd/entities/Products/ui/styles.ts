import { createSxStyles } from '@fsd/shared'

export const getStyles = (isFavorite?: boolean) => {
  const classes = {
    action: 'action',
    actionSecondary: 'actionSecondary',
  }

  return createSxStyles(
    {
      product: theme => ({
        '@media (hover: hover)': {
          [`&:hover .${classes.action}, &:hover .${classes.actionSecondary}`]: {
            opacity: 1,
            transition: theme.transitions.create(['opacity', 'visibility']),
            visibility: 'visible',
          },
        },
        pb: 6,
      }),
      productAction: {
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        position: 'absolute',
        width: '100%',
      },
      productActionWrapper: {
        opacity: { md: 0, xs: 1 },
        visibility: { md: 'hidden', xs: 'visible' },
      },
      productFavorite: {
        display: 'flex',
        justifyContent: 'flex-end',
        opacity: { md: isFavorite ? 1 : 0, xs: 1 },
        visibility: { md: isFavorite ? 'visible' : 'hidden', xs: 'visible' },
      },
      productImage: {
        height: '100%',
        objectFit: 'cover',
        width: '100%',
      },
      productImageSkeleton: {
        height: '100%',
        maxHeight: 348.99,
        transform: 'none',
        width: '100%',
      },
      productImageWrapper: {
        height: { md: 357.5, xs: 308 },
        position: 'relative',
      },
      productInfo: {
        height: '100%',
        p: 2,
        position: 'absolute',
        top: 0,
        width: '100%',
      },
      productPrice: { alignItems: 'end', display: 'flex', height: 32 },
      productRating: { height: 32 },
    },
    classes,
  )
}
