import { createSxStyles } from '@fsd/shared/lib'

export const getStyles = () =>
  createSxStyles({
    input: theme => ({
      ...theme.typography.caption1,
    }),
    root: { display: 'flex' },
    searchButton: { height: 40, width: 40 },
  })
