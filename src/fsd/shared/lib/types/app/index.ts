export type DeviceType = 'mobile' | 'desktop'

export type EntityWithSkeleton = {
  skeleton?: boolean
}

export type DirectionOrder = 'asc' | 'desc'

export type RequestResult<T> = {
  items: T[]
  count: number
}

export type RequestError = typeof Error

export type LayoutVariant = 'primary' | 'secondary'
