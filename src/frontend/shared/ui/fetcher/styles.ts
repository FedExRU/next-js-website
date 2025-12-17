import { createSxStyles } from '@frontend/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ height = 'auto', isLoading }: GetStylesProps) =>
  createSxStyles({
    progress: {
      bottom: 0,
      height: 3,
      left: 0,
      position: 'absolute',
      width: '100%',
    },
    root: theme => ({
      '@media (hover: hover)': {
        '&:hover': { color: 'text.primary' },
      },
      backgroundColor: 'transparent',
      border: 'none',
      cursor: isLoading ? 'default' : 'pointer',
      height,
      p: 0,
      position: 'relative',
      transition: theme.transitions.create('color'),
      width: 'fit-content',
    }),
  })
