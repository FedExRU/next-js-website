import { ReactNode } from 'react'

import { NotificationType } from '../../lib'

export type Notification = {
  color: NotificationType
  id: string
  message: ReactNode
  open: boolean
  title: ReactNode
}

export type UseNotificationsReturnProps = {
  handleClose: (id: Notification['id']) => void
  handleErase: (id: Notification['id']) => void
  notifications: Notification[]
}
