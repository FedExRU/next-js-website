import { type AlertColor } from '@mui/material'

export type NotificationType = AlertColor

export type SendNotificationsOptions = {
  title?: React.ReactNode
  type?: NotificationType
}
