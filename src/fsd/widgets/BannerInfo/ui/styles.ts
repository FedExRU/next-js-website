import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    bannerInfoImageWrapper: {
      height: 532,
      position: 'relative',
    },
    bannerInfoContentWrapper: theme => ({
      py: {
        xs: 7.5,
        md: 0,
      },
      pr: {
        xs: 4,
        md: 0,
      },
      pl: {
        xs: 4,
        md: 9,
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      height: '100%',
      width: '100%',
      backgroundColor: theme.palette.grey[200],
    }),
    bannerInfoContent: {
      width: '100%',
      maxWidth: 452,
      display: 'flex',
      flexDirection: 'column',
    },
    bannerInfoContentTitle: { mt: 2, maxWidth: { xs: 295, sm: 350 } },
  })
