import type { EntityWithSkeleton } from '@fsd/shared/lib'

export type PriceProps = EntityWithSkeleton & {
  value?: string
  valueDiscount?: string
}
