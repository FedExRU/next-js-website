'use client'

import { Box, Stack } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'

import { useNotifications } from '../model'
import { NotificationItem } from './components'
export const Notifications = () => {
  const { erase, notifications } = useNotifications()

  return (
    <Stack
      sx={{
        bottom: 0,
        maxWidth: 600,
        paddingBottom: 2,
        position: 'fixed',
        width: '100%',
        zIndex: 100,
      }}
    >
      <Box
        component={TransitionGroup}
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        {notifications.map(({ id, ...rest }) => (
          <NotificationItem id={id} key={id} onClosed={erase} {...rest} />
        ))}
      </Box>
    </Stack>
  )
}
