import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    bannerInfoContent: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 452,
      width: '100%',
    },
    bannerInfoContentTitle: { maxWidth: { sm: 350, xs: 295 }, mt: 2 },
    bannerInfoContentWrapper: theme => ({
      alignItems: 'center',
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      height: '100%',
      justifyContent: 'start',
      pl: {
        md: 9,
        xs: 4,
      },
      pr: {
        md: 0,
        xs: 4,
      },
      py: {
        md: 0,
        xs: 7.5,
      },
      width: '100%',
    }),
    bannerInfoImageWrapper: {
      height: 532,
      position: 'relative',
    },
  })
