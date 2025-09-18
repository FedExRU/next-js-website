import { Notification } from '../../model'

export type NotificationItemProps = Partial<Omit<Notification, 'id'>> & {
  autoCloseTime?: number
  id: Notification['id']
  onClosed?: (id: Notification['id']) => void
  onOpened?: (id: Notification['id']) => void
}
