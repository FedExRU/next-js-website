import { createSxStyles } from '@fsd/shared'

export const getStyles = (isFavorite?: boolean) => {
  const classes = {
    action: 'action',
    actionSecondary: 'actionSecondary',
  }

  return createSxStyles(
    {
      product: theme => ({
        pb: 6,
        [`&:hover .${classes.action}, &:hover .${classes.actionSecondary}`]: {
          opacity: 1,
          visibility: 'visible',
          transition: theme.transitions.create(['opacity', 'visibility']),
        },
      }),
      productImageWrapper: {
        position: 'relative',
        height: { xs: 308, md: 357.5 },
      },
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
      productActionWrapper: {
        visibility: { xs: 'visible', md: 'hidden' },
        opacity: { xs: 1, md: 0 },
      },
      productPrice: { height: 32, display: 'flex', alignItems: 'end' },
      productFavorite: {
        display: 'flex',
        justifyContent: 'flex-end',
        visibility: { xs: 'visible', md: isFavorite ? 'visible' : 'hidden' },
        opacity: { xs: 1, md: isFavorite ? 1 : 0 },
      },
    },
    classes,
  )
}
