export type FirebaseResult<T = Record<string, unknown>> = {
  items: T[]
  count: number
}

export type DirectionOrder = 'asc' | 'desc'

export type LayoutVariant = 'primary' | 'secondary'

export type EntityWithSkeleton = {
  skeleton?: boolean
}
