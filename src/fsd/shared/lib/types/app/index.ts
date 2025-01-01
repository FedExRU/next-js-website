import { DEVICE_TYPE, DIRECTION_ORDER, LAYOUT } from '../../constants'

export type DeviceType = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE]

export type EntityWithSkeleton = {
  skeleton?: boolean
}

export type EntityWithLayout = {
  layout?: Layout
}

export type DirectionOrder =
  (typeof DIRECTION_ORDER)[keyof typeof DIRECTION_ORDER]

export type RequestResult<T> = {
  items: T[]
  count: number
}

export type RequestError = typeof Error

export type Layout = (typeof LAYOUT)[keyof typeof LAYOUT]

export type RequestBase<T> = {
  limit?: number
  orderBy?: {
    field: keyof T
    direction: DirectionOrder
  }
}

export type BaseSingleResponse = {
  code: number
  message: string
  success: boolean
}
