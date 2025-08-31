import type { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared/lib'

import { ICategory } from '@fsd/entities/categories'

export type BannerCategoryProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<ICategory> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
