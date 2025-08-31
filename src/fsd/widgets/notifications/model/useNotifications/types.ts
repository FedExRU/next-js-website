import { NotificationType } from '../../lib'

export type Notification = {
  color: NotificationType
  id: string
  message: React.ReactNode
  title: React.ReactNode
}

export type UseNotificationsReturnProps = {
  erase: (id: Notification['id']) => void
  notifications: Notification[]
}
