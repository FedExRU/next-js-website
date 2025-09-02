import { createSxStyles } from '@fsd/shared/lib'

import { NotificationType } from '../../lib'

export const getStyles = (color?: NotificationType) =>
  createSxStyles({
    iconButton: {
      bgcolor: 'transparent !important',
      borderBottom: 'none',
    },
    iconButtonText: { left: -999999, position: 'absolute' },
    notification: { position: 'relative' },
    notificationContainer: {
      bgcolor: 'common.white',
    },
    notificationIndicator: theme => ({
      backgroundColor:
        color === undefined
          ? theme.palette.primary.main
          : theme.palette[color].main,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 4,
    }),
  })
