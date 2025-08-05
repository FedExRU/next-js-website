import { createSxStyles } from '@fsd/shared'

import subscribeBackgroundImage from './assets/subscribe-background.webp'

export const getStyles = () =>
  createSxStyles({
    form: {
      maxWidth: {
        md: 'none',
        xs: 550,
      },
      mt: 4,
      mx: 'auto',
      width: '100%',
    },
    formHelperText: { minHeight: 22 },
    subscribeForm: {
      alignItems: 'center',
      background: theme => ({
        md: `url(${subscribeBackgroundImage.src}) no-repeat center`,
        xs: theme.palette.grey[200],
      }),
      backgroundSize: {
        md: '100% 100%',
        xs: undefined,
      },
      display: 'flex',
      flexDirection: 'column',
      height: 360,
      justifyContent: 'center',
      px: {
        md: 0,
        xs: 4,
      },
      width: '100%',
    },
    subscribeFormContent: {
      width: {
        md: 540,
        xs: '100%',
      },
    },
    title: {
      mb: 2,
    },
  })
