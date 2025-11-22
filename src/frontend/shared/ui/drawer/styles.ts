import { createSxStyles } from '@frontend/shared/lib'

export const getStyles = () =>
  createSxStyles({
    actionSecondary: {
      padding: 0,
    },
    actionSecondaryWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    closeButton: {
      boxShadow: 'none',
    },
    closeButtonContainer: {
      ml: 'auto',
    },
    footer: {
      mt: 'auto',
    },
  })
