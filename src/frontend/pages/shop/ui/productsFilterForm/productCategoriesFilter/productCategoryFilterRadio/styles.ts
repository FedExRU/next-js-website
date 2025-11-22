import { createSxStyles } from '@frontend/shared/lib'

export const getStyles = () =>
  createSxStyles({
    categoriesList: {
      display: 'flex',
      gap: 1,
      p: 0,
      width: '100%',
    },

    formControl: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      maxHeight: 300,
      overflowY: 'auto',
      px: 0.25,
    },
    inputLabel: {
      mb: 1,
    },
  })
