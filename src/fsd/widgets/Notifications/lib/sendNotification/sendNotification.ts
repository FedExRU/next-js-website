import { eventBus } from '@fsd/shared'

import { EVENT_NAME } from './constants'
import { SendNotificationsOptions } from './types'

/**
 * Sends a notification to the event bus.
 *
 * @param {ReactNode} message - The message to be sent to the event bus.
 * @param {NotificationType} type - The type of the notification.
 */
export const sendNotification = (
  message: React.ReactNode,
  options: SendNotificationsOptions = { type: 'success' },
) => {
  eventBus.broadcast(EVENT_NAME, message, options)
}

export const subscribe = (
  eventName: string,
  cb: (message: React.ReactNode, options?: SendNotificationsOptions) => void,
) => eventBus.subscribe(eventName, cb)
