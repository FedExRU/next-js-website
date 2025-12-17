import { createSxStyles } from '@frontend/shared/lib'

export const getStyles = () =>
  createSxStyles({
    root: theme => ({
      [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
        mt: 4,
      },
      [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
        mt: 7.5,
      },
    }),
  })
