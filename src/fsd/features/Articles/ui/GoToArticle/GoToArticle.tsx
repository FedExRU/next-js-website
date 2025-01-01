'use client'

import { FC } from 'react'
import { GoToArticleProps } from './types'
import { GO_TO_ARTICLE_TEXT } from './constants'
import { ActionLink, Skeleton } from '@fsd/shared'

export const GoToArticle: FC<GoToArticleProps> = ({
  skeleton,
  text = GO_TO_ARTICLE_TEXT,
}) => (
  <>
    {skeleton ? (
      <Skeleton
        sx={{
          width: '100%',
          maxWidth: 121,
          height: 28,
        }}
      />
    ) : (
      <ActionLink text={text} />
    )}
  </>
)
