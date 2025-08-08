import { createSxStyles } from '@fsd/shared'

import { GetStylesProps } from './types'

export const getStyles = ({ skeletonColor }: GetStylesProps) =>
  createSxStyles({
    link: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          color: 'grey.300',
        },
      },

      color: 'grey.100',
      display: 'inline-flex',
      transition: theme.transitions.create('color'),
    }),
    skeleton: {
      bgcolor: skeletonColor === 'primary' ? undefined : 'grey.400',
    },
  })
