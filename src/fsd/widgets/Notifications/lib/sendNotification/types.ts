import { type AlertColor } from '@mui/material'
import { ReactNode } from 'react'

export type NotificationType = AlertColor

export type SendNotificationsOptions = {
  title?: ReactNode
  type?: NotificationType
}
