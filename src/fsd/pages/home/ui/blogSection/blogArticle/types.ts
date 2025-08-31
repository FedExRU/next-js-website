import type { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared/lib'

import { IArticle } from '@fsd/entities/articles'

export type BlogArticleProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IArticle> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
