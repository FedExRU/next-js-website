'use client'

import { FC } from 'react'
import { GoToCategoryProps } from './types'
import { GO_TO_CATEGORY_TEXT } from './constants'
import { ActionLink, Skeleton } from '@fsd/shared'

export const GoToCategory: FC<GoToCategoryProps> = ({
  skeleton,
  text = GO_TO_CATEGORY_TEXT,
}) => (
  <>
    {skeleton ? (
      <Skeleton
        sx={{
          width: '100%',
          maxWidth: {
            xs: 87.13,
            sm: 96.63,
          },
          height: { xs: 32, sm: 35.53 },
        }}
      />
    ) : (
      <ActionLink text={text} />
    )}
  </>
)
