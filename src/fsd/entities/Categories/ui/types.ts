import { ReactElement } from 'react'
import { ICategory } from '../api'
import { EntityWithSkeleton, EntityWithLayout } from '@fsd/shared'

export type CategoryProps = Partial<ICategory> &
  EntityWithSkeleton &
  EntityWithLayout & {
    renderActionButton?: () => ReactElement
  }
