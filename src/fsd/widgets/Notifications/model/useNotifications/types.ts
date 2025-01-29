import { ReactNode } from 'react'

import { NotificationType } from '../../lib'

export type Notification = {
  color: NotificationType
  id: string
  message: ReactNode
  title: ReactNode
}

export type UseNotificationsReturnProps = {
  erase: (id: Notification['id']) => void
  notifications: Notification[]
}
