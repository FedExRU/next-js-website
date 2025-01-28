import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'
import { ReactElement } from 'react'

import { ICategory } from '../api'

export type CategoryProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<ICategory> & {
    renderAction?: () => ReactElement<unknown>
  }
