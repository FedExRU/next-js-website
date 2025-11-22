import React from 'react'

import { DEVICE_TYPE, DIRECTION_ORDER, LAYOUT, VIEW } from '../constants'

export type BaseActionResponse<T = unknown> = T & {
  message: string
  success: boolean
}

export type DeviceType = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE]

export type EntityWithLayout = {
  layout?: Layout
}

export type EntityWithSkeleton = {
  skeleton?: boolean
  skeletonColor?: 'primary' | 'secondary'
}

export type EntityWithSlots<T extends Record<string, React.ReactNode>> = {
  slots?: T
}

export type EntityWithView = {
  view?: View
}

export type Layout = (typeof LAYOUT)[keyof typeof LAYOUT]

export type RequestError = typeof Error

export type View = (typeof VIEW)[keyof typeof VIEW]
