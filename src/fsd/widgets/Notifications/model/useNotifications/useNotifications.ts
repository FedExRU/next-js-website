import { useEffect, useRef, useState } from 'react'

import { EVENT_NAME, subscribe } from '../../lib'
import { Notification, UseNotificationsReturnProps } from './types'

export const useNotifications = (): UseNotificationsReturnProps => {
  const [notifications, setNotifications] = useState<
    Record<string, Notification>
  >({})
  const firstNotificationIdRef = useRef<null | string>(null)

  const handleClose = (id: string) => {
    setNotifications(prev => {
      const currentNotifications = {
        ...prev,
        [id]: { ...prev[id], open: false },
      }

      return currentNotifications
    })
  }

  const handleErase = (id: string) => {
    setNotifications(prev => {
      const currentNotifications = { ...prev }

      delete currentNotifications[id]

      return currentNotifications
    })
  }

  useEffect(() => {
    const unsubscribe = subscribe(EVENT_NAME, (message, options = {}) => {
      const id = `${Date.now()}`

      setNotifications(prev => {
        const currentNotifications = { ...prev }
        const notificationsKeys = Object.keys(currentNotifications)

        if (notificationsKeys.length === 0) {
          firstNotificationIdRef.current = id
        }
        if (
          notificationsKeys.length + 1 === 4 &&
          firstNotificationIdRef.current
        ) {
          currentNotifications[firstNotificationIdRef.current].open = false
          firstNotificationIdRef.current = notificationsKeys[1]
        }

        console.log({
          ...currentNotifications,
          [id]: {
            color: options.type ?? 'success',
            id,
            message,
            open: true,
            title: options.title,
          },
        })

        return {
          ...currentNotifications,
          [id]: {
            color: options.type ?? 'success',
            id,
            message,
            open: true,
            title: options.title,
          },
        }
      })
    })

    return () => unsubscribe()
  }, [])

  return {
    handleClose,
    handleErase,
    notifications: Object.values(notifications),
  }
}
