import { createSxStyles } from '@frontend/shared/lib'

import { GetStylesProps } from './types'

export const getStyles = ({ value }: GetStylesProps) =>
  createSxStyles({
    color: {
      backgroundColor: value,
      borderRadius: 1,
      boxShadow: '0px 0px 2px #ccc',
      display: 'inline-block',
      height: 24,
      width: 24,
    },
  })
