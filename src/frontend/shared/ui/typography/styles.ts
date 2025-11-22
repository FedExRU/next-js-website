import { createSxStyles } from '../../lib'

export const getStyles = () =>
  createSxStyles({
    icon: {
      display: 'flex',
    },
    iconRoot: {
      alignItems: 'center',
      display: 'flex',
      gap: 1,
    },
    iconText: {
      display: 'flex',
    },
  })
