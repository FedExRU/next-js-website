import React from 'react'

import { EVENT_NAME, subscribe } from '../../lib'
import { Notification, UseNotificationsReturnProps } from './types'

export const useNotifications = (): UseNotificationsReturnProps => {
  const [notifications, setNotifications] = React.useState<Notification[]>([])

  const erase = (id: string) => {
    setNotifications(prev =>
      prev.filter(notification => notification.id !== id),
    )
  }

  React.useEffect(() => {
    const unsubscribe = subscribe(EVENT_NAME, (message, options = {}) => {
      setNotifications(prev => [
        ...prev,
        {
          color: options.type ?? 'success',
          id: `${Date.now()}`,
          message,
          title: options.title,
        },
      ])
    })

    return () => unsubscribe()
  }, [])

  return {
    erase,
    notifications: notifications.slice(0, 3),
  }
}
