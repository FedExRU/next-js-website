import { createSxStyles } from '@frontend/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ isFocused }: GetStylesProps) =>
  createSxStyles({
    filterButton: theme => ({
      '@media (hover: hover)': {
        '&:hover': {
          borderColor: 'common.black',
        },
      },
      borderColor: isFocused ? 'common.black' : 'grey.400',
      borderRadius: 1,
      borderStyle: 'solid',
      borderWidth: 2,
      boxShadow: 'none',
      color: 'grey.400',
      height: 48,
      p: 2,
      transition: theme.transitions.create('border-color'),
      width: 48,
    }),
  })
