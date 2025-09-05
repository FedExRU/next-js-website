import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    banner: theme => ({
      '& .MuiAlert-action': {
        '& .MuiButtonBase-root': {
          background: 'transparent',
          boxShadow: 'none',
        },
        ml: 0,
        p: 0,
      },
      '& .MuiAlert-message': {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        p: 0,

        width: '100%',
      },
      backgroundColor: theme.palette.grey[200],

      color: theme.palette.grey[500],
      py: 1,
      textDecoration: 'none',
    }),
    iconWrapper: {
      display: 'inline-flex',
    },
    text: {
      alignItems: 'center',
      display: 'inline-flex',
      gap: 1.5,
    },
  })
