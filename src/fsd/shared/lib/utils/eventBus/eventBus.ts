import type { UnknownCallback } from './types'

const subscriptions: Record<string, Set<UnknownCallback<unknown[]>>> = {}

/**
 * Subscribe to a specific event.
 *
 * @param {string} eventName - The name of the event to subscribe to.
 * @param {UnknownCallback} callback - The callback function to be called when the event is emitted.
 *
 * @returns {() => void} A function that unsubscribes the callback from the event.
 */
const subscribe = <T extends unknown[] = unknown[]>(
  eventName: string,
  callback: UnknownCallback<T>,
): (() => void) => {
  if (!subscriptions[eventName]) {
    ;(subscriptions[eventName] as Set<UnknownCallback<T>>) = new Set<
      UnknownCallback<T>
    >()
  }

  const callbacks = subscriptions[eventName] as Set<UnknownCallback<T>>

  callbacks.add(callback)

  return () => {
    callbacks.delete(callback)

    if (callbacks.size === 0) {
      delete subscriptions[eventName]
    }
  }
}

/**
 * Broadcast an event to all subscribers.
 *
 * @param {string} eventName - The name of the event to broadcast.
 * @param {...unknown} args - The arguments to pass to the subscribers.
 */
const broadcast = <T extends unknown[] = unknown[]>(
  eventName: string,
  ...args: T
) => {
  if (!subscriptions[eventName]) {
    return
  }

  const callbacks = subscriptions[eventName]

  for (const callback of callbacks) {
    callback(...args)
  }
}

/**
 * Event bus for subscribing and broadcasting events.
 */
export const eventBus = {
  broadcast,
  subscribe,
}
