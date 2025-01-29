'use client'

import { Box, Stack } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'

import { useNotifications } from '../model'
import { NotificationItem } from './components'
import { getStyles } from './styles'

export const Notifications = () => {
  const { erase, notifications } = useNotifications()
  const { styles } = getStyles()

  return (
    <Stack sx={styles.notificationsStack}>
      <Box component={TransitionGroup} sx={styles.transitionGroup}>
        {notifications.map(({ id, ...rest }) => (
          <NotificationItem id={id} key={id} onClosed={erase} {...rest} />
        ))}
      </Box>
    </Stack>
  )
}
