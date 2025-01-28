import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'
import { ReactElement } from 'react'

import { IProduct } from '../api'

export type ProductProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IProduct> & {
    isFavorite?: boolean
    renderAction?: () => ReactElement<unknown>
    renderActionSecondary?: (isFavorite?: boolean) => ReactElement<unknown>
  }
