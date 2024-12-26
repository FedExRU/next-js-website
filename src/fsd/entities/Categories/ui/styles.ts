import { createSxStyles } from '@fsd/shared'

export const getStyles = (isPrimary: boolean, skeleton?: boolean) =>
  createSxStyles({
    category: {
      p: {
        xs: 4,
        md: isPrimary ? 6 : 4,
      },
      pr: {
        xs: isPrimary ? 4 : 3,
      },
      backgroundColor: 'grey.200',
      height: '100%',
      display: 'flex',
    },
    categoryName: theme => ({
      minHeight: 41,
      [theme.breakpoints.up('sm')]: {
        ...theme.typography.h5,
      },
      [theme.breakpoints.down('sm')]: {
        ...theme.typography.h6,
      },
    }),
    categoryNameSkeleton: {
      width: '100%',
      maxWidth: 201,
      height: { xs: 34, sm: 38 },
      transform: 'none',
    },
    categoryAction: { mt: 1, sm: isPrimary ? 0 : 2 },
    categoryImageWrapper: {
      height: {
        xs: isPrimary ? 300 : 'auto',
        sm: isPrimary ? 400 : 'auto',
        md: 'auto',
      },
      position: 'relative',
      '& img': {
        position: 'relative !important',
        objectFit: 'contain',
        objectPosition: 'bottom',
        opacity: skeleton ? 0 : 1,
        maxHeight: {
          xs: 'none',
          sm: isPrimary ? 'none' : 286,
        },
        minHeight: {
          xs: 'auto',
          sm: isPrimary ? 'auto' : 286,
        },
      },
    },
    categoryImageSkeleton: {
      transform: 'none',
      top: 0,
      left: 0,
      position: 'absolute',
      zIndex: 1,
      height: '100%',
      width: '100%',
    },
  })
