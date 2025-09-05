'use client'

import { ActionButtonLink, Skeleton } from '@fsd/shared/ui'

import { GO_TO_CATEGORY_TEXT } from './constants'
import { GoToCategoryProps } from './types'

export const GoToCategory: React.FC<GoToCategoryProps> = ({
  skeleton,
  text = GO_TO_CATEGORY_TEXT,
}) => (
  <>
    {skeleton ? (
      <Skeleton
        sx={{
          height: { sm: 35.53, xs: 32 },
          maxWidth: {
            sm: 96.63,
            xs: 87.13,
          },
          width: '100%',
        }}
      />
    ) : (
      <ActionButtonLink text={text} />
    )}
  </>
)
