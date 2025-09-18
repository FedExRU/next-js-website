import type { EntityWithSkeleton } from '../../../../shared/lib'

export type PriceProps = EntityWithSkeleton & {
  value?: string
  valueDiscount?: string
}
