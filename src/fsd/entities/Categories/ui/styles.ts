import { createSxStyles } from '@fsd/shared'

export const getStyles = (isPrimary: boolean, skeleton?: boolean) =>
  createSxStyles({
    category: {
      backgroundColor: 'grey.200',
      display: 'flex',
      height: '100%',
      p: {
        md: isPrimary ? 6 : 4,
        xs: 4,
      },
      pr: {
        xs: isPrimary ? 4 : 3,
      },
    },
    categoryAction: { mt: 1, sm: isPrimary ? 0 : 2 },
    categoryImageSkeleton: {
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      transform: 'none',
      width: '100%',
      zIndex: 1,
    },
    categoryImageWrapper: {
      '& img': {
        maxHeight: {
          sm: isPrimary ? 'none' : 286,
          xs: 'none',
        },
        minHeight: {
          sm: isPrimary ? 'auto' : 286,
          xs: 'auto',
        },
        objectFit: 'contain',
        objectPosition: 'bottom',
        opacity: skeleton ? 0 : 1,
        position: 'relative !important',
      },
      height: {
        md: 'auto',
        sm: isPrimary ? 400 : 'auto',
        xs: isPrimary ? 300 : 'auto',
      },
      position: 'relative',
    },
    categoryName: theme => ({
      minHeight: 41,
      [theme.breakpoints.down('sm')]: {
        ...theme.typography.h6,
      },
      [theme.breakpoints.up('sm')]: {
        ...theme.typography.h5,
      },
    }),
    categoryNameSkeleton: {
      height: { sm: 38, xs: 34 },
      maxWidth: 201,
      transform: 'none',
      width: '100%',
    },
  })
