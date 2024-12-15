import { ReactElement } from 'react'
import { IProduct } from '../api'
import { EntityWithSkeleton, EntityWithLayout } from '@fsd/shared'

export type ProductProps = Partial<IProduct> &
  EntityWithSkeleton &
  EntityWithLayout & {
    renderAction?: () => ReactElement
    renderActionSecondary?: (isFavorite?: boolean) => ReactElement
    isFavorite?: boolean
  }
