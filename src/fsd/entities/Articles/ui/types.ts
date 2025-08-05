import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'

import { IArticle } from '../api'

export type ArticleProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IArticle> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
