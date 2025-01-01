import subscribeBackgroundImage from './assets/subscribe-background.webp'
import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    subscribeForm: {
      width: '100%',
      height: 360,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme => ({
        xs: theme.palette.grey[200],
        md: `url(${subscribeBackgroundImage.src}) no-repeat center`,
      }),
      px: {
        xs: 4,
        md: 0,
      },
      backgroundSize: {
        xs: undefined,
        md: '100% 100%',
      },
    },
    subscribeFormContent: {
      width: {
        xs: '100%',
        md: 540,
      },
    },
    title: {
      mb: 2,
    },
    form: {
      width: '100%',
      mt: 4,
      mx: 'auto',
      maxWidth: {
        xs: 550,
        md: 'none',
      },
    },
  })
