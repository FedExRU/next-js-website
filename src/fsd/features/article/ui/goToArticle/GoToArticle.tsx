'use client'

import { ActionLink, Skeleton } from '@fsd/shared/ui'

import { GO_TO_ARTICLE_TEXT } from './constants'
import { GoToArticleProps } from './types'

export const GoToArticle: React.FC<GoToArticleProps> = ({
  skeleton,
  text = GO_TO_ARTICLE_TEXT,
}) => (
  <>
    {skeleton ? (
      <Skeleton
        sx={{
          height: 28,
          maxWidth: 121,
          width: '100%',
        }}
      />
    ) : (
      <ActionLink text={text} />
    )}
  </>
)
