import { createSxStyles } from '@fsd/shared'

export const getStyles = () =>
  createSxStyles({
    notificationsStack: {
      bottom: 0,
      maxWidth: 600,
      paddingBottom: 2,
      position: 'fixed',
      width: '100%',
      zIndex: 100,
    },
    transitionGroup: { display: 'flex', flexDirection: 'column', gap: 1 },
  })
