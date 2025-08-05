import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'

import { ICategory } from '../api'

export type CategoryProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<ICategory> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
