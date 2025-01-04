import { ReactElement } from 'react'
import { IArticle } from '../api'
import { EntityWithSkeleton, EntityWithLayout } from '@fsd/shared'

export type ArticleProps = Partial<IArticle> &
  EntityWithSkeleton &
  EntityWithLayout & {
    renderAction?: () => ReactElement<unknown>
  }
