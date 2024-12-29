import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    advantage: theme => ({
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      flexDirection: 'column',
      px: 4,
      py: 6,
    }),
    icon: {
      '& svg': {
        fontSize: 48,
      },
      mb: 3,
    },
  })
