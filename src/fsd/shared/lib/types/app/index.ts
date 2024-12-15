export type DeviceType = 'mobile' | 'desktop'

export type EntityWithSkeleton = {
  skeleton?: boolean
}

export type EntityWithLayout = {
  layout?: Layout
}

export type DirectionOrder = 'asc' | 'desc'

export type RequestResult<T> = {
  items: T[]
  count: number
}

export type RequestError = typeof Error

export type Layout = 'primary' | 'secondary'

export type GetAllArgs<T> = {
  limit?: number
  orderBy?: {
    field: keyof T
    direction: DirectionOrder
  }
}
