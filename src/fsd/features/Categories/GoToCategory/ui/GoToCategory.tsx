'use client'

import { FC } from 'react'
import { GoToCategoryProps } from './types'
import { GO_TO_CATEGORY_TEXT } from './constants'
import { ArrowRightMediumIcon, Button, Skeleton } from '@fsd/shared'

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
      <Button
        variant="text"
        size={{
          sm: 'small',
          xs: 'xSmall',
        }}
        component="a"
        href="#"
        sx={{
          px: '0 !important',
        }}
      >
        {text} <ArrowRightMediumIcon sx={{ '& path': { strokeWidth: 1.25 } }} />
      </Button>
    )}
  </>
)
