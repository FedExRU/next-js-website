'use client'

import { ActionLink, Skeleton } from '@fsd/shared'
import { FC } from 'react'

import { GO_TO_ARTICLE_TEXT } from './constants'
import { GoToArticleProps } from './types'

export const GoToArticle: FC<GoToArticleProps> = ({
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
