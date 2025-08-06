import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    advantage: theme => ({
      [`@media (min-width: 374px) and (max-width: ${theme.breakpoints.values.md}px)`]:
        {
          minHeight: 219,
        },
      [`@media (min-width: ${theme.breakpoints.values.md}px) and (max-width: 928px)`]:
        {
          minHeight: 293,
        },
      [`@media (min-width: ${theme.breakpoints.values.md}px) and (max-width: 1145px)`]:
        {
          minHeight: 265,
        },
      [`@media (min-width: ${theme.breakpoints.values.xs}px) and (max-width: 374px)`]:
        {
          minHeight: 240,
        },
      backgroundColor: theme.palette.grey[200],
      display: 'flex',
      flexDirection: 'column',
      px: {
        sm: 4,
        xs: 2,
      },
      py: {
        sm: 6,
        xs: 4,
      },
    }),
    description: {
      width: {
        sm: 'auto',
        xs: 100,
      },
    },
    icon: {
      '& svg': {
        fontSize: 48,
      },
      mb: 3,
    },
  })
