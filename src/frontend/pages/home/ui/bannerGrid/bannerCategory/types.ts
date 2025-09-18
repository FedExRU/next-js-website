import type {
  EntityWithLayout,
  EntityWithSkeleton,
} from '../../../../../shared/lib'

import { ICategory } from '../../../../../entities/categories'

export type BannerCategoryProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<ICategory> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
