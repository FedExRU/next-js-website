import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'

import { IProduct } from '../api'

export type ProductProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IProduct> & {
    isFavorite?: boolean
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
    renderActionSecondary?: <TProps = unknown>(
      isFavorite?: boolean,
    ) => React.ReactElement<TProps>
  }
