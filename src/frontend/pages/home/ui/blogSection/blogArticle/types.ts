import type {
  EntityWithLayout,
  EntityWithSkeleton,
} from '../../../../../shared/lib'

import { IArticle } from '../../../../../entities/articles'

export type BlogArticleProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IArticle> & {
    renderAction?: <TProps = unknown>() => React.ReactElement<TProps>
  }
