import { IProductContract } from '@common/interfaces'

import type { EntityWithLayout, EntityWithSkeleton } from '../../../shared/lib'

export type ProductProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<
    Pick<
      IProductContract,
      'discountPercentage' | 'discountPrice' | 'name' | 'price'
    >
  > & {
    image?: string
    isFavorite?: boolean
    isNew?: boolean
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
    renderActionSecondary?: <TProps = unknown>(
      isFavorite?: boolean,
    ) => React.ReactElement<TProps>
  }
