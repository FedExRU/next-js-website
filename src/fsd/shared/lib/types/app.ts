import { DEVICE_TYPE, DIRECTION_ORDER, LAYOUT } from '../constants'

export type BaseActionResponse<T = unknown> = T & {
  message: string
  success: boolean
}

export type DeviceType = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE]

export type DirectionOrder =
  (typeof DIRECTION_ORDER)[keyof typeof DIRECTION_ORDER]

export type EntityWithLayout = {
  layout?: Layout
}

export type EntityWithSkeleton = {
  skeleton?: boolean
  skeletonColor?: 'primary' | 'secondary'
}

export type Layout = (typeof LAYOUT)[keyof typeof LAYOUT]

export type RequestBase<T> = {
  limit?: number
  orderBy?: {
    direction: DirectionOrder
    field: keyof T
  }
}

export type RequestError = typeof Error

export type RequestResult<T> = {
  count: number
  items: T[]
}
