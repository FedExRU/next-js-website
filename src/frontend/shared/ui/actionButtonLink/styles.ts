import { createSxStyles } from '../../lib'

export const getStyles = () =>
  createSxStyles({
    actionButtonLink: {
      px: '0 !important',
    },
    icon: { '& path': { strokeWidth: 1.25 }, pl: 0.5 },
  })
