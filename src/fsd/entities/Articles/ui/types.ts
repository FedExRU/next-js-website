import { EntityWithLayout, EntityWithSkeleton } from '@fsd/shared'
import { ReactElement } from 'react'

import { IArticle } from '../api'

export type ArticleProps = EntityWithLayout &
  EntityWithSkeleton &
  Partial<IArticle> & {
    renderAction?: () => ReactElement<unknown>
  }
