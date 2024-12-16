import { EntityWithSkeleton } from '@fsd/shared'

export type PriceProps = EntityWithSkeleton & {
  value?: number | null
  valueDiscount?: number | null
}
