import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    advantage: theme => ({
      [`@media (min-width: ${theme.breakpoints.values.md}px) and (max-width: 1145px)`]:
        {
          minHeight: 265,
        },
      [`@media (min-width: ${theme.breakpoints.values.md}px) and (max-width: 928px)`]:
        {
          minHeight: 293,
        },
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      flexDirection: 'column',
      px: {
        xs: 2,
        sm: 4,
      },
      py: {
        xs: 4,
        sm: 6,
      },
    }),
    icon: {
      '& svg': {
        fontSize: 48,
      },
      mb: 3,
    },
    description: {
      width: {
        xs: 100,
        sm: 'auto',
      },
    },
  })
