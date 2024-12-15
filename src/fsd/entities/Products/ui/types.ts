import { ReactElement } from 'react'
import { IProduct } from '../api'
import { EntityWithSkeleton, EntityWithLayout } from '@fsd/shared'

export type ProductProps = Partial<IProduct> &
  EntityWithSkeleton &
  EntityWithLayout & {
    renderActionButton?: () => ReactElement
  }
