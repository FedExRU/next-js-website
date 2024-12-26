import { createSxStyles } from '@fsd/shared'

export const getStyles = (isTablet: boolean, isFavorite?: boolean) => {
  const classes = {
    action: 'action',
    actionSecondary: 'actionSecondary',
  }

  return createSxStyles(
    {
      product: theme => ({
        pb: 6,
        [`&:hover .${classes.action}, &:hover .${classes.actionSecondary}`]:
          isTablet
            ? {}
            : {
                opacity: 1,
                visibility: 'visible',
                transition: theme.transitions.create(['opacity', 'visibility']),
              },
      }),
      productImage: { position: 'relative', height: { xs: 308, md: 357.5 } },
      productImageSkeleton: {
        width: '100%',
        height: '100%',
        maxHeight: 348.99,
        transform: 'none',
      },
      productRating: { height: 32 },
      productInfo: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        p: 2,
      },
      productAction: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        p: 2,
        display: 'flex',
        justifyContent: 'center',
      },
      productActionWrapper: isTablet
        ? {}
        : { visibility: 'visible', opacity: 0 },
      productPrice: { height: 32, display: 'flex', alignItems: 'end' },
      productFavorite: {
        display: 'flex',
        justifyContent: 'flex-end',
        ...(isTablet || isFavorite
          ? {}
          : {
              visibility: 'visible',
              opacity: 0,
            }),
      },
    },
    classes,
  )
}
